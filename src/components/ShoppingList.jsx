import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import GroceryItem from './GroceryItem'
import AddItemForm from './AddItemForm'

export default function ShoppingList({ items, stores, onAdd, onRemove }) {
  return (
    <Container className="py-4">
      <h2 className="mb-3">Shopping List</h2>
      <AddItemForm stores={stores} onAdd={onAdd} />
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
