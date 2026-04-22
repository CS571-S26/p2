import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import FilterBar from './FilterBar'
import GroceryItem from './GroceryItem'
import AddItemForm from './AddItemForm'
import EmptyState from './EmptyState'
import ConfirmModal from './ConfirmModal'

export default function MasterList({ items, stores, onAdd, onRemove, showToast }) {
  const [filters, setFilters] = useState({ name: '', store: '', maxPrice: '' })
  const [pendingDelete, setPendingDelete] = useState(null)

  const filtered = items.filter(item => {
    if (filters.name && !item.name.toLowerCase().includes(filters.name.toLowerCase())) return false
    if (filters.store && item.store !== filters.store) return false
    if (filters.maxPrice && item.price > parseFloat(filters.maxPrice)) return false
    return true
  })

  const handleAdd = (item) => {
    onAdd(item)
    showToast(`Added "${item.name}" to your list`)
  }

  const requestDelete = (id) => {
    const target = items.find(i => i.id === id)
    if (target) setPendingDelete(target)
  }

  const confirmDelete = () => {
    if (pendingDelete) {
      onRemove(pendingDelete.id)
      showToast(`Removed "${pendingDelete.name}"`)
    }
    setPendingDelete(null)
  }

  return (
    <Container className="py-4">
      <h2 className="mb-3">Shopping List</h2>
      <AddItemForm stores={stores} onAdd={handleAdd} />
      <FilterBar filters={filters} onChange={setFilters} stores={stores} showStore showMaxPrice />
      {filtered.length === 0 ? (
        <EmptyState message={items.length === 0
          ? 'Your list is empty. Add a custom item above, or browse the catalog.'
          : 'No items match your filters.'} />
      ) : (
        <ListGroup>
          {filtered.map(item => (
            <GroceryItem key={item.id} item={item} onRemove={requestDelete} />
          ))}
        </ListGroup>
      )}

      <ConfirmModal
        show={pendingDelete !== null}
        title="Remove item?"
        message={pendingDelete ? `Remove "${pendingDelete.name}" from your shopping list?` : ''}
        onConfirm={confirmDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </Container>
  )
}
