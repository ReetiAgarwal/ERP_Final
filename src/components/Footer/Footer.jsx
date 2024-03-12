import React from 'react'
import { Link } from "react-router-dom"
import "./Footer.css"

function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className='footer_logo'>
          LOGO
        </div>
        <div className='footer_menu'>
          <ul className="footer_list">
            MENU
            <hr className="line1"/>
            <li className="footer_item" >
              <Link to="/">Dashboard</Link>
            </li>
            <li className="footer_item">
              <Link to="/products">Product</Link>
            </li>
            <li className="footer_item">
              <Link to="/orders">Order</Link>
            </li>
          </ul>
        </div>
        <div className='footer_contact'>
          <ul className="footer_list">
            CONTACT
            <hr className='line2'/>
            <li className="footer_item">
              Phone
            </li>
            <li className="footer_item">
              Email
            </li>
            <li className="footer_item">
              WhatsApp
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
