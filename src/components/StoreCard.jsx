import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { formatPrice } from '../utils'

export default function StoreCard({ store, onRemove }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title>{store.name}</Card.Title>
            <Card.Text className="text-muted mb-1">{store.location}</Card.Text>
            <Card.Text><small>{store.hours}{store.phone ? ` | ${store.phone}` : ''}</small></Card.Text>
          </div>
          {onRemove && (
            <Button variant="outline-danger" size="sm" onClick={() => onRemove(store.id)}>Remove</Button>
          )}
        </div>
      </Card.Body>
      {store.items && store.items.length > 0 && (
        <ListGroup variant="flush">
          {store.items.map((item, i) => (
            <ListGroup.Item key={i} className="d-flex justify-content-between">
              <span>{item.name}</span>
              <span className="text-muted">{formatPrice(item.price)}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Card>
  )
}
