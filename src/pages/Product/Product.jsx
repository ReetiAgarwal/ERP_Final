import { Delete } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
// import { products } from "../../ProductDetails";
import { DeleteCall } from "../../ContectCalls";
import Edit from "../../components/Edit/Edit";
// import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { AuthContext } from "../../context/AuthContext";
import './Product.css';

function Product() {
  const {products,isFetching,error,dispatch} = useContext(AuthContext);
  const [EditOpen,setEditOpen] = useState(false);
  const [prod,setProd] = useState();

  const handleDelete = (id) => {
    DeleteCall(id,dispatch);
  }

  const handleEdit = (product) => {
    setEditOpen(true);
    setProd(product);
  }

  return (
    <>
        <Navbar2/>
        <div className="item-container">
          {
            products.map((i)=>{
                return(
                  <div className="item" key={i.id}>
                      <span className="del" onClick={()=>handleDelete(i.id)}><Delete className="icon"/></span>
                      <div className="name">Name : {i.name}</div>
                      <div className="category">Category : {i.category}</div>
                      <div className="price">Price : {i.price}</div>
                      <div className="quantity">Quantity : {i.quantity}</div>
                      <button className="edit" onClick={()=>handleEdit(i)}>EDIT</button>
                  </div>
                )
            })
          }
        </div>
        <div className="add">
          <Link className="add_link" to="/add_product">Add New Product</Link>
        </div>
        { 
          EditOpen && <Edit prod={prod} setEditOpen={setEditOpen}/>
        }
    </>
  )
}

export default Product
