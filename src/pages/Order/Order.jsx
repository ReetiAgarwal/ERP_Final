import React, { useContext, useState } from 'react';
// import { orders } from "../../OrderDetails"
import { Delete } from '@mui/icons-material';
import { DeleteCall_Order } from '../../ContectCalls';
import Edit from "../../components/Edit/Edit";
// import Navbar from "../../components/Navbar/Navbar";
import Navbar2 from "../../components/Navbar2/Navbar2";
import { AuthContext } from '../../context/AuthContext';
import './Order.css';

function Order() {
  const {isFetching,error,orders,dispatch} = useContext(AuthContext);
  const [EditOpen,setEditOpen] = useState(false);
  const [ord,setOrder] = useState();

  const handleDelete = (id) => {
    DeleteCall_Order(id,dispatch);
  }

  const handleEdit = (order) => {
    setEditOpen(true);
    setOrder(order);
  }
  return (
    <>
        <Navbar2 order="order"/>
        <div className="item-container">
          {
            orders.map((i)=>{
                return(
                  <div className="item" key={i.id}>
                      <span className="del" onClick={()=>handleDelete(i.id)}><Delete className="icon"/></span>
                      <div className="id">Id : {i.id}</div>
                      <div className="cust_name">Customer Name : {i.cust_name}</div>
                      <div className="date">Date : {i.date}</div>
                      <div className="status">Status : {i.status}</div>
                      <button className="edit" onClick={()=>handleEdit(i)}>EDIT</button>
                  </div>
                )
            })
          }
        </div>
        { 
          EditOpen && <Edit order={ord} setEditOpen={setEditOpen}/>
        }
    </>
  )
}

export default Order
