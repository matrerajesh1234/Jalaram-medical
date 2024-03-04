import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    
    <footer>
      <div className="footer-content">
      <div className="footer-web-logo">
        <img src="/Images/jalaram logo.png" alt="Footer Web Logo" id="footer-web-logo" />
      </div>
      <div className="footer-column">
        For I will come to the smallest detail, who should practice any kind of
        work except that some benefit from it results from our practice.
      </div>
      <div className="footer-column">
        <h4>Contact Us :</h4>
        <a>9898989075</a>
      </div>
      <div className="footer-column">
        <h4>
        Business Hours :
          <br />
          <br />
          Mon-Sun: 9:30 AM - 1:00 PM, 4:00 - 11:00 PM
          <br />
          <br />
          demo@jalarammedical.com
        </h4>
      </div>
    </div>
    <div className="footer-content-2">
      <div className="footer-column-2">
        <h4>Information</h4>
        <hr />
        <br />
        <ul>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            
            <Link to="/about">About Us</Link>
          </li>
          <li>
          <a href="#">Secure Payment</a>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
          <li>
            <a href="#">Stores</a>
          </li>
        </ul>
      </div>
      <div className="footer-column-2">
        <h4>Custom Links</h4>
        <hr />
        <br />
        <ul>
          <li>
            <a href="#">Legal Notice</a>
          </li>
          <li>
            <a href="#">Prices Drop</a>
          </li>
          <li>
            <a href="#">New Products</a>
          </li>
          <li>
            <a href="#">Best Sales</a>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <a href="#">My Account</a>
          </li>
        </ul>
      </div>
      <div className="footer-column-2" id="footer-column-2">
        <h4>Newsletter</h4>
        <hr />
        <br />
        <ul>
          <li>
            You may unsubscribe at any moment. For that purpose, please find our
            contact.
          </li>
        </ul>
        <form action="">
          <div className="footer-email">
            <input
              type="email"
              name="email"
              id="f-email"
              placeholder="Enter your mail"
              data-name="email"
              aria-invalid="false"
              aria-required="true"
            />
          </div>
          <div className="footer-email-submit">
            <button
              type="submit"
              className="footer-email-submit-button"
              target="email"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      © 2024 Jalaram Medical. All rights reserved.
    </div>
  </footer>
  
  )
}

export default Footer
