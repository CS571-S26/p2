import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ShoppingList from './components/ShoppingList'
import Stores from './components/Stores'
import { DEFAULT_STORES } from './data'

let nextId = 100

export default function App() {
  const [items, setItems] = useState([])

  const addItem = (item) => {
    setItems(prev => [...prev, { ...item, id: nextId++ }])
  }

  const removeItem = (id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ShoppingList items={items} onAdd={addItem} onRemove={removeItem} />} />
        <Route path="/stores" element={<Stores stores={DEFAULT_STORES} />} />
      </Routes>
    </>
  )
}
