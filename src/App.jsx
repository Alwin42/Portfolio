import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

import Projects from './pages/Projects'
import Contact from './pages/Contact'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      {/* Loading screen overlays everything */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}