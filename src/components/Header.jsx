import React from 'react'
import Logo from '../assets/mjlogo.jpg'
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/"><img src={Logo} alt="Logo" srcSet="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <a className="nav-link active text-danger" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/service">Service</a>
              <a className="nav-link" href="/tracking">Tracking</a>
              <a className="nav-link" href="/contact">Contact</a>
            </div>
            <div className="navbar">
              <a href="/contact" className="btn btn-danger" type="submit">Request a Quote</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header                                                  