import React from 'react'
import Gallery1 from '../assets/Gallery1.png'
import Gallery2 from '../assets/Gallery2.png'
import Gallery3 from '../assets/Gallery3.png'
import Gallery4 from '../assets/Gallery4.png'

function Footer() {
  return (
    <>
      <div className="bg-dark text-light mt-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>CRYSTAL SHIPMENT </h4>
              <p>Crystal Shipment Services is a global supplier of transport and logistics solutions. We have offices in more than 20 countries and an international network of partners and agents.</p>
            </div>
            <div className="col-md-3">
              <h4>QUICK LINKS</h4>
              <ul className='list-unstyled '>
                <li><a href="" className='text-decoration-none text-light'>All services</a></li>
                <li><a href="" className='text-decoration-none text-light'>Land Freight</a></li>
                <li><a href="" className='text-decoration-none text-light'>Sea Frieght</a></li>
                <li><a href="" className='text-decoration-none text-light'>Air Freight</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>PHOTO GALLERY</h4>
              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Gallery1} alt="" className='img-fluid rounded' />
                </div>
                <div className="flex-grow-1 ms-2">
                  <img src={Gallery2} alt="" className='img-fluid rounded' />
                </div>
              </div>
              <div className="d-flex mt-3">
                <div className="flex-grow-1 me-2">
                  <img src={Gallery3} alt="" className='img-fluid rounded' />
                </div>
                <div className="flex-grow-1 ms-2">
                  <img src={Gallery4} alt="" className='img-fluid rounded' />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4>OUR NEWSLETTER</h4>
              <p>Sign up today for tips and latest news and exclusive special offers.</p>
              <input className=' form-control text-light container-fluid-round mb-3' type="mail" placeholder='Enter your email' />
              <button className='btn btn-danger mt-3'> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer