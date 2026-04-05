import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

export default function GroceryItem({ item, onRemove }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.name}</strong>
        {item.store && <Badge bg="secondary" className="ms-2">{item.store}</Badge>}
        {item.price > 0 && <span className="text-muted ms-2">${item.price.toFixed(2)}</span>}
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => onRemove(item.id)}>Remove</Button>
    </ListGroup.Item>
  )
}
