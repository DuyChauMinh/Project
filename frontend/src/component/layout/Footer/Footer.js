import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h1>Site Link</h1>
        <h2><Link to="/contact">Contact Us</Link></h2>
        <h2><Link to="/contact">Contact Us</Link></h2>
        <h2><Link to="/contact">Contact Us</Link></h2>
      </div>

      <div className="midFooter">
        <h1>Ecommerce</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2021 &copy; DuyChau</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/parentsbabyshop">Facebook</a>
        <p>Hotline1: ............</p>
        <p>Hotline2: ............</p>
      </div>
    </footer>
  )
}

export default Footer
