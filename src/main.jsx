import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home'
import About from './Pages/About'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Testimonials from './Pages/Testimonials'
import Gallery from './Pages/Gallery'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      
    </BrowserRouter>
  </StrictMode>,
)
