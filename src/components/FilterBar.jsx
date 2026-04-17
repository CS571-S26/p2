import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function FilterBar({ filters, onChange, stores, showStore, showMaxPrice }) {
  const cols = showStore || showMaxPrice ? 4 : 12

  return (
    <Row className="g-2 mb-3 align-items-end">
      <Col xs={12} sm={cols}>
        <Form.Label htmlFor="filter-name">Search by name</Form.Label>
        <Form.Control
          id="filter-name"
          type="text"
          placeholder="Type to filter..."
          value={filters.name}
          onChange={e => onChange({ ...filters, name: e.target.value })}
        />
      </Col>
      {showStore && (
        <Col xs={12} sm={4}>
          <Form.Label htmlFor="filter-store">Filter by store</Form.Label>
          <Form.Select
            id="filter-store"
            value={filters.store}
            onChange={e => onChange({ ...filters, store: e.target.value })}
          >
            <option value="">All stores</option>
            {stores.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
          </Form.Select>
        </Col>
      )}
      {showMaxPrice && (
        <Col xs={12} sm={4}>
          <Form.Label htmlFor="filter-price">Max price</Form.Label>
          <Form.Control
            id="filter-price"
            type="number"
            step="0.01"
            min="0"
            placeholder="No limit"
            value={filters.maxPrice}
            onChange={e => onChange({ ...filters, maxPrice: e.target.value })}
          />
        </Col>
      )}
    </Row>
  )
}
