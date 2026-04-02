import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">BasketBuddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav activeKey={location.pathname}>
            <Nav.Link as={Link} to="/" eventKey="/">Shopping List</Nav.Link>
            <Nav.Link as={Link} to="/stores" eventKey="/stores">Stores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
