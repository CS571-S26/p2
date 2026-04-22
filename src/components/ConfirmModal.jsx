import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function ConfirmModal({ show, title, message, confirmLabel, onConfirm, onCancel }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title || 'Are you sure?'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button variant="danger" onClick={onConfirm}>{confirmLabel || 'Remove'}</Button>
      </Modal.Footer>
    </Modal>
  )
}
