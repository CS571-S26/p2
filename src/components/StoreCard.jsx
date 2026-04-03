import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default function StoreCard({ store }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{store.name}</Card.Title>
        <Card.Text className="text-muted">{store.location}</Card.Text>
        <Card.Text><small>{store.hours} | {store.phone}</small></Card.Text>
      </Card.Body>
      <ListGroup variant="flush">
        {store.items.map((item, i) => (
          <ListGroup.Item key={i} className="d-flex justify-content-between">
            <span>{item.name}</span>
            <span className="text-muted">${item.price.toFixed(2)}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  )
}
