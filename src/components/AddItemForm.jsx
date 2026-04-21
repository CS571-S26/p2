import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function AddItemForm({ stores, onAdd }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [store, setStore] = useState('')
  const [quantity, setQuantity] = useState('1')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onAdd({
      name: name.trim(),
      price: price,
      store: store,
      quantity: parseInt(quantity) || 1,
    })
    setName('')
    setPrice('')
    setStore('')
    setQuantity('1')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <h5 className="mb-2">Add a custom item</h5>
      <Row className="g-2 align-items-end">
        <Col xs={12} sm={3}>
          <Form.Label htmlFor="custom-name">Name</Form.Label>
          <Form.Control id="custom-name" value={name} onChange={e => setName(e.target.value)} required />
        </Col>
        <Col xs={6} sm={2}>
          <Form.Label htmlFor="custom-price">Price</Form.Label>
          <Form.Control id="custom-price" type="number" step="0.01" min="0" placeholder="optional" value={price} onChange={e => setPrice(e.target.value)} />
        </Col>
        <Col xs={6} sm={3}>
          <Form.Label htmlFor="custom-store">Store</Form.Label>
          <Form.Select id="custom-store" value={store} onChange={e => setStore(e.target.value)}>
            <option value="">None</option>
            {stores.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
          </Form.Select>
        </Col>
        <Col xs={6} sm={2}>
          <Form.Label htmlFor="custom-qty">Qty</Form.Label>
          <Form.Control id="custom-qty" type="number" min="1" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </Col>
        <Col xs={6} sm={2}>
          <Button type="submit" variant="primary" className="w-100">Add</Button>
        </Col>
      </Row>
    </Form>
  )
}
