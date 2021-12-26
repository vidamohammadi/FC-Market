import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
