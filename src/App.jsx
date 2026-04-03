import { Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'
import Stores from './components/Stores'
import { DEFAULT_STORES } from './data'

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <Container className="py-4">
            <h2>Shopping List</h2>
            <p className="text-muted">Coming soon...</p>
          </Container>
        } />
        <Route path="/stores" element={<Stores stores={DEFAULT_STORES} />} />
      </Routes>
    </>
  )
}
