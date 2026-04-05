import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import GroceryItem from './GroceryItem'

export default function ShoppingList({ items, onAdd, onRemove }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onAdd({ name: name.trim(), price: 0, store: '' })
    setName('')
  }

  return (
    <Container className="py-4">
      <h2 className="mb-3">Shopping List</h2>
      <Row className="mb-4">
        <Col md={8}>
          <Form onSubmit={handleSubmit} className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Add an item..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit" variant="primary">Add</Button>
          </Form>
        </Col>
      </Row>
      {items.length === 0 ? (
        <Alert variant="info">Your shopping list is empty. Add items above or browse stores!</Alert>
      ) : (
        <ListGroup>
          {items.map(item => (
            <GroceryItem key={item.id} item={item} onRemove={onRemove} />
          ))}
        </ListGroup>
      )}
    </Container>
  )
}
