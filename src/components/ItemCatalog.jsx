import { useState, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import FilterBar from './FilterBar'
import CatalogItem from './CatalogItem'
import EmptyState from './EmptyState'

export default function ItemCatalog({ stores, onAddToList }) {
  const [filters, setFilters] = useState({ name: '', store: '', maxPrice: '' })

  const allItems = useMemo(() => {
    const out = []
    for (const store of stores) {
      for (const item of (store.items || [])) {
        out.push({ ...item, storeName: store.name, storeId: store.id })
      }
    }
    out.sort((a, b) => a.name.localeCompare(b.name))
    return out
  }, [stores])

  const filtered = allItems.filter(item => {
    if (filters.name && !item.name.toLowerCase().includes(filters.name.toLowerCase())) return false
    if (filters.store && item.storeName !== filters.store) return false
    if (filters.maxPrice && item.price > parseFloat(filters.maxPrice)) return false
    return true
  })

  return (
    <Container className="py-4">
      <h2 className="mb-3">Item Catalog</h2>
      <p className="text-body-secondary">Browse items across every store. Click + to add to your list.</p>
      <FilterBar filters={filters} onChange={setFilters} stores={stores} showStore showMaxPrice />
      {filtered.length === 0 ? (
        <EmptyState message="No items match your filters." />
      ) : (
        <ListGroup>
          {filtered.map((item, i) => (
            <CatalogItem
              key={i}
              name={item.name}
              price={item.price}
              storeName={item.storeName}
              onAdd={onAddToList}
            />
          ))}
        </ListGroup>
      )}
    </Container>
  )
}
