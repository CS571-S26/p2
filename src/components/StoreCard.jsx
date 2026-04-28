import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { formatPrice } from '../utils'
import AddCatalogItemForm from './AddCatalogItemForm'

export default function StoreCard({ store, onRemove, onAddItem, onRemoveItem }) {
  const [adding, setAdding] = useState(false)

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <Card.Title as="h3" className="h5">{store.name}</Card.Title>
            <Card.Text className="text-body-secondary mb-1">{store.location}</Card.Text>
            <Card.Text><small>{store.hours}{store.phone ? ` | ${store.phone}` : ''}</small></Card.Text>
          </div>
          {onRemove && (
            <Button variant="outline-danger" size="sm" onClick={() => onRemove(store.id)} aria-label={`Remove ${store.name}`}>Remove</Button>
          )}
        </div>
      </Card.Body>
      {store.items && store.items.length > 0 && (
        <ListGroup variant="flush">
          {store.items.map((item, i) => (
            <ListGroup.Item key={i} className="d-flex justify-content-between align-items-center">
              <span>{item.name}</span>
              <div className="d-flex align-items-center gap-2">
                <span className="text-body-secondary">{formatPrice(item.price)}</span>
                {onRemoveItem && (
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onRemoveItem(store.id, i)}
                    aria-label={`Remove ${item.name} from ${store.name}`}
                  >×</Button>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      {onAddItem && (
        adding ? (
          <AddCatalogItemForm
            storeId={store.id}
            onAdd={(sid, item) => { onAddItem(sid, item); setAdding(false) }}
            onCancel={() => setAdding(false)}
          />
        ) : (
          <Card.Footer className="bg-transparent">
            <Button variant="outline-primary" size="sm" onClick={() => setAdding(true)}>+ Add item</Button>
          </Card.Footer>
        )
      )}
    </Card>
  )
}
