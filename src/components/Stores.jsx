import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StoreCard from './StoreCard'

export default function Stores({ stores }) {
  return (
    <Container className="py-4">
      <h2 className="mb-3">Store Directory</h2>
      <Row>
        {stores.map(store => (
          <Col md={6} lg={4} key={store.id}>
            <StoreCard store={store} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
