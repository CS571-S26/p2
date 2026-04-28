import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { priceValue } from '../utils'

export default function AddCatalogItemForm({ storeId, onAdd, onCancel }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onAdd(storeId, { name: name.trim(), price: priceValue(price) })
    setName('')
    setPrice('')
  }

  const nameId = `store-${storeId}-item-name`
  const priceId = `store-${storeId}-item-price`

  return (
    <Form onSubmit={submit} className="p-3 border-top">
      <Row className="g-2 align-items-end">
        <Col xs={12} sm={6}>
          <Form.Label htmlFor={nameId} className="small mb-1">Item name</Form.Label>
          <Form.Control id={nameId} size="sm" value={name} onChange={e => setName(e.target.value)} required />
        </Col>
        <Col xs={6} sm={3}>
          <Form.Label htmlFor={priceId} className="small mb-1">Price</Form.Label>
          <Form.Control id={priceId} size="sm" type="number" step="0.01" min="0" placeholder="optional" value={price} onChange={e => setPrice(e.target.value)} />
        </Col>
        <Col xs={6} sm={3} className="d-flex gap-1">
          <Button type="submit" variant="primary" size="sm" className="flex-grow-1">Add</Button>
          {onCancel && (
            <Button type="button" variant="outline-secondary" size="sm" onClick={onCancel} aria-label="Cancel adding item">×</Button>
          )}
        </Col>
      </Row>
    </Form>
  )
}
