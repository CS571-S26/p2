import Alert from 'react-bootstrap/Alert'

export default function EmptyState({ message }) {
  return <Alert variant="info" className="mb-3">{message}</Alert>
}
