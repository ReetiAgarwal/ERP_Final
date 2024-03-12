import CloseIcon from '@mui/icons-material/Close';
import React, { useContext, useRef } from 'react';
import { EditCall, EditCall_Order } from "../../ContectCalls";
import { AuthContext } from '../../context/AuthContext';
import './Edit.css';

function Edit({prod,setEditOpen,order}) {
    const name =useRef();
    const category =useRef();
    const price =useRef();
    const quantity =useRef();
    const Id =useRef();
    const cust_name =useRef();
    const date =useRef();
    const status =useRef();
    const {products,isFetching,error,orders,dispatch} = useContext(AuthContext);

    const handleEdit = (e) => {
        e.preventDefault();
        products.forEach((item)=>{
            if(item.id===prod.id)
            {
                item.name = name.current.value;
                item.category = category.current.value;
                item.price = price.current.value;
                item.quantity = quantity.current.value;
            }
        })
        EditCall(products,dispatch);
        setEditOpen(false);
    }

    const handleEdit_Order = (e) => {
        e.preventDefault();
        orders.forEach((item)=>{
            if(item.id===order.id)
            {
                item.id = Id.current.value;
                item.cust_name = cust_name.current.value;
                item.date = date.current.value;
                item.status = status.current.value;
            }
        })
        EditCall_Order(orders,dispatch);
        setEditOpen(false);
    }

  return (
    <>
      <div className="edit_container">
        <div className="edit_block parent">
          <CloseIcon className="close" onClick={()=>setEditOpen(false)}/>
          {
            prod ?
            (
              <>
                Name  <input type="text" className="inp" ref={name} defaultValue={prod.name}/>
                Category  <input type="text" className="inp" defaultValue={prod.category} ref={category}/>
                Price  <input type="number" className="inp" defaultValue={prod.price} ref={price}/>
                Quantity <input type="number" className="inp" defaultValue={prod.quantity} ref={quantity}/>
                <button className="edit_button" onClick={handleEdit}>EDIT</button>
              </>
            )
            :
            (
              <>
                Id  <input type="text" className="inp" ref={Id} defaultValue={order.id} style={{pointerEvents: 'none',background:"rgba(189, 189, 189, 0.594)",border:"none"}}/>
                Customer Name  <input type="text" className="inp" defaultValue={order.cust_name} ref={cust_name} style={{pointerEvents: 'none',background:"rgba(189, 189, 189, 0.594)",border:"none"}}/>
                Date  <input type="date" className="inp" defaultValue={order.date} ref={date} style={{pointerEvents: 'none',background:"rgba(189, 189, 189, 0.594)",border:"none"}}/>
                Status
                <select name="status" className="inp" defaultValue={order.status} ref={status}>
                  <option value="In Process">In Process</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Failed">Failed</option>
                </select>
                <button className="edit_button" onClick={handleEdit_Order}>EDIT</button>
              </>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Edit
