import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

export default function NotificationToast({ show, message, onClose, variant }) {
  return (
    <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1080 }}>
      <Toast show={show} onClose={onClose} delay={2500} autohide bg={variant || 'success'}>
        <Toast.Body className="text-white">{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}
