import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <>
      <NavBar />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<h2>Shopping List</h2>} />
          <Route path="/stores" element={<h2>Store Directory</h2>} />
        </Routes>
      </Container>
    </>
  )
}
