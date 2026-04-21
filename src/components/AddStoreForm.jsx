import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function AddStoreForm({ onAdd }) {
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [hours, setHours] = useState('')
  const [phone, setPhone] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    onAdd({
      name: name.trim(),
      location: location.trim(),
      hours: hours.trim(),
      phone: phone.trim(),
      items: [],
    })
    setName('')
    setLocation('')
    setHours('')
    setPhone('')
  }

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <h5 className="mb-2">Add a store</h5>
      <Row className="g-2 align-items-end">
        <Col xs={12} sm={3}>
          <Form.Label htmlFor="store-name">Name</Form.Label>
          <Form.Control id="store-name" value={name} onChange={e => setName(e.target.value)} required />
        </Col>
        <Col xs={12} sm={3}>
          <Form.Label htmlFor="store-location">Location</Form.Label>
          <Form.Control id="store-location" value={location} onChange={e => setLocation(e.target.value)} placeholder="optional" />
        </Col>
        <Col xs={6} sm={2}>
          <Form.Label htmlFor="store-hours">Hours</Form.Label>
          <Form.Control id="store-hours" value={hours} onChange={e => setHours(e.target.value)} placeholder="e.g. 8AM-10PM" />
        </Col>
        <Col xs={6} sm={2}>
          <Form.Label htmlFor="store-phone">Phone</Form.Label>
          <Form.Control id="store-phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="optional" />
        </Col>
        <Col xs={12} sm={2}>
          <Button type="submit" variant="primary" className="w-100">Add Store</Button>
        </Col>
      </Row>
    </Form>
  )
}
