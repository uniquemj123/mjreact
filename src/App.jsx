import React, { useEffect } from "react";
import Header from './components/Header'
import Home from './components/Home'
import Service from './components/Service'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 3000, });
  }, [])
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/tracking' element={<Tracking />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>

  )
}

export default App

