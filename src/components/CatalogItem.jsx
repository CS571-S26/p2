import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { formatPrice, priceValue } from '../utils'

export default function CatalogItem({ name, price, storeName, onAdd }) {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <strong>{name}</strong>
        <Badge bg="secondary" className="ms-2">{storeName}</Badge>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="text-body-secondary">{formatPrice(price)}</span>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => onAdd({ name, price: priceValue(price), store: storeName, quantity: 1 })}
        >
          + List
        </Button>
      </div>
    </ListGroup.Item>
  )
}
