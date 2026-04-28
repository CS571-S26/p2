import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MasterList from './components/MasterList'
import Stores from './components/Stores'
import ItemCatalog from './components/ItemCatalog'
import NotificationToast from './components/NotificationToast'
import Footer from './components/Footer'
import { DEFAULT_STORES } from './data'

function load(key, fallback) {
  try {
    const saved = localStorage.getItem(key)
    return saved ? JSON.parse(saved) : fallback
  } catch { return fallback }
}

let nextId = load('bb_nextId', 100)

export default function App() {
  const [items, setItems] = useState(() => load('bb_items', []))
  const [stores, setStores] = useState(() => load('bb_stores', DEFAULT_STORES))
  const [theme, setTheme] = useState(() => load('bb_theme', 'light'))
  const [toast, setToast] = useState({ show: false, message: '' })

  useEffect(() => localStorage.setItem('bb_items', JSON.stringify(items)), [items])
  useEffect(() => localStorage.setItem('bb_stores', JSON.stringify(stores)), [stores])
  useEffect(() => localStorage.setItem('bb_nextId', JSON.stringify(nextId)), [nextId])
  useEffect(() => {
    localStorage.setItem('bb_theme', JSON.stringify(theme))
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const showToast = (message) => setToast({ show: true, message })
  const closeToast = () => setToast({ show: false, message: '' })

  const addItem = (item) => {
    setItems(prev => [...prev, { ...item, id: nextId++ }])
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  const addStore = (store) => {
    setStores(prev => [...prev, { ...store, id: nextId++ }])
  }

  const removeStore = (id) => {
    setStores(prev => prev.filter(s => s.id !== id))
  }

  const addItemToStore = (storeId, item) => {
    setStores(prev => prev.map(s => s.id === storeId
      ? { ...s, items: [...(s.items || []), item] }
      : s))
    showToast(`Added "${item.name}" to the catalog`)
  }

  const removeItemFromStore = (storeId, itemIdx) => {
    setStores(prev => prev.map(s => s.id === storeId
      ? { ...s, items: (s.items || []).filter((_, i) => i !== itemIdx) }
      : s))
  }

  return (
    <>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<MasterList items={items} stores={stores} onAdd={addItem} onRemove={removeItem} showToast={showToast} />} />
          <Route path="/stores" element={<Stores stores={stores} onAddStore={addStore} onRemoveStore={removeStore} onAddItemToStore={addItemToStore} onRemoveItemFromStore={removeItemFromStore} />} />
          <Route path="/catalog" element={<ItemCatalog stores={stores} onAddToList={addItem} showToast={showToast} />} />
        </Routes>
      </main>
      <Footer />
      <NotificationToast show={toast.show} message={toast.message} onClose={closeToast} />
    </>
  )
}
