import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StoreCard from './StoreCard'
import AddStoreForm from './AddStoreForm'
import PageHeader from './PageHeader'

export default function Stores({ stores, onAddStore, onRemoveStore }) {
  return (
    <Container className="py-4">
      <PageHeader title="Store Directory" subtitle="Madison grocery stores. Add your own." />
      <AddStoreForm onAdd={onAddStore} />
      <h2 className="h5 mt-4 mb-3">Stores</h2>
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
