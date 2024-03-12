import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { ReactComponent as Hamburger } from '../../assets/icons/hamburger.svg'
import './Navbar2.css'

const Navbar2 = ({order}) => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <>
    {
        order ? 
        (
            <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link className="logo2" to="/">LOGO</Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                Menu
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        { 
                            order!="calendar"? 
                            <Link to="/calendar">
                                Calendar
                            </Link>
                            :
                            <Link to="/orders">
                                Order
                            </Link>
                        }
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
        :
        (
            <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Link className="logo2" to="/">LOGO</Link>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                Menu
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        )
    }
    </>
  )
}

export default Navbar2
