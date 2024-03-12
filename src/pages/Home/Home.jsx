import React, { useContext } from 'react'
import CountUp from 'react-countup'
import { Link } from "react-router-dom"
// import { orders } from "../../OrderDetails"
// import { products } from "../../ProductDetails"
import Footer from "../../components/Footer/Footer"
// import Navbar from "../../components/Navbar/Navbar"
import Navbar2 from "../../components/Navbar2/Navbar2"
import { AuthContext } from "../../context/AuthContext"
import "./Home.css"

function Home() {
  const {products,isFetching,error,orders,dispatch} = useContext(AuthContext);
  return (
    <>
      <div className='body'>
        <Navbar2/>

        <div className="middle">
          <div className="buttons">
              <Link className="prod" to="/products">Products</Link>
              <Link className="ord" to="/orders">Orders</Link>
          </div>
          {/*Code For Counting Numbers*/}
          <div className="features">
              <div className="cont">
                  <div className="tex">No. of Products</div>
                  <CountUp className="num" start={0} end={products.length}/>
              </div>
              <div className="cont">
                  <div className="tex">No. of Orders</div>
                  <CountUp className="num" start={0} end={orders.length}/>
              </div>
          </div>
          {/*the end of counting*/}
        </div>

        <Footer/>
      </div>
    </>
  )
}

export default Home
