import Container from 'react-bootstrap/Container'

export default function Footer() {
  return (
    <footer className="border-top mt-5 py-3">
      <Container className="text-body-secondary small d-flex justify-content-between flex-wrap gap-2">
        <span>BasketBuddy &middot; CS 571 P2</span>
        <span>Sanyam Garg &amp; Max Kirkorsky</span>
      </Container>
    </footer>
  )
}
