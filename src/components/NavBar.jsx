import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar({ theme, onToggleTheme }) {
  const location = useLocation()

  return (
    <>
      <a href="#main-content" className="visually-hidden-focusable btn btn-primary m-2">Skip to main content</a>
      <Navbar bg="dark" data-bs-theme="dark" expand="sm">
        <Container>
          <Navbar.Brand as={Link} to="/">BasketBuddy</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav activeKey={location.pathname} className="me-auto">
              <Nav.Link as={Link} to="/" eventKey="/">Shopping List</Nav.Link>
              <Nav.Link as={Link} to="/stores" eventKey="/stores">Stores</Nav.Link>
              <Nav.Link as={Link} to="/catalog" eventKey="/catalog">Catalog</Nav.Link>
            </Nav>
            <Button
              variant="outline-light"
              size="sm"
              onClick={onToggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            >
              <span aria-hidden="true">{theme === 'light' ? '🌙' : '☀️'}</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
