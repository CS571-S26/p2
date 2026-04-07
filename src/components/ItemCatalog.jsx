import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function ItemCatalog({ stores, onAddToList }) {
  const [search, setSearch] = useState('')

  const allItems = stores.flatMap(store =>
    store.items.map(item => ({ ...item, storeName: store.name }))
  )

  const filtered = allItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.storeName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container className="py-4">
      <h2 className="mb-3">Item Catalog</h2>
      <Form.Control
        type="text"
        placeholder="Search items or stores..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-3"
      />
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Item</th>
            <th>Store</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.storeName}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => onAddToList({ name: item.name, price: item.price, store: item.storeName })}
                >
                  + List
                </Button>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr><td colSpan={4} className="text-center text-muted">No items found</td></tr>
          )}
        </tbody>
      </Table>
    </Container>
  )
}
