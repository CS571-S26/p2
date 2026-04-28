import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { formatPrice } from '../utils'

export default function GroceryItem({ item, onRemove }) {
  const priceText = formatPrice(item.price)
  const qty = item.quantity && item.quantity > 1 ? ` ×${item.quantity}` : ''
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{item.name}{qty}</strong>
        {item.store && <Badge bg="secondary" className="ms-2">{item.store}</Badge>}
        {priceText && <span className="text-body-secondary ms-2">{priceText}</span>}
      </div>
      <Button variant="outline-danger" size="sm" onClick={() => onRemove(item.id)}>Remove</Button>
    </ListGroup.Item>
  )
}
