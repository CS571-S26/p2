import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StoreCard from './StoreCard'
import AddStoreForm from './AddStoreForm'

export default function Stores({ stores, onAddStore, onRemoveStore }) {
  return (
    <Container className="py-4">
      <h2 className="mb-3">Store Directory</h2>
      <AddStoreForm onAdd={onAddStore} />
      <Row>
        {stores.map(store => (
          <Col md={6} lg={4} key={store.id}>
            <StoreCard store={store} onRemove={onRemoveStore} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
