import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import MasterList from './components/MasterList'
import Stores from './components/Stores'
import ItemCatalog from './components/ItemCatalog'
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

  useEffect(() => localStorage.setItem('bb_items', JSON.stringify(items)), [items])
  useEffect(() => localStorage.setItem('bb_stores', JSON.stringify(stores)), [stores])
  useEffect(() => localStorage.setItem('bb_nextId', JSON.stringify(nextId)), [nextId])
  useEffect(() => {
    localStorage.setItem('bb_theme', JSON.stringify(theme))
    document.documentElement.setAttribute('data-bs-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')

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

  return (
    <>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<MasterList items={items} stores={stores} onAdd={addItem} onRemove={removeItem} />} />
        <Route path="/stores" element={<Stores stores={stores} onAddStore={addStore} onRemoveStore={removeStore} />} />
        <Route path="/catalog" element={<ItemCatalog stores={stores} onAddToList={addItem} />} />
      </Routes>
    </>
  )
}
