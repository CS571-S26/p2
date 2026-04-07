import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ShoppingList from './components/ShoppingList'
import Stores from './components/Stores'
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
  const [theme, setTheme] = useState(() => load('bb_theme', 'light'))

  useEffect(() => localStorage.setItem('bb_items', JSON.stringify(items)), [items])
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

  return (
    <>
      <NavBar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<ShoppingList items={items} onAdd={addItem} onRemove={removeItem} />} />
        <Route path="/stores" element={<Stores stores={DEFAULT_STORES} />} />
      </Routes>
    </>
  )
}
