import React, { useContext, useState } from 'react';
// import Navbar from '../../components/Navbar/Navbar';
import Navbar2 from "../../components/Navbar2/Navbar2";
import { AuthContext } from '../../context/AuthContext';
import "./Calendar.css";

function Calendar() {
    const {orders} = useContext(AuthContext);
    const [day, setDay] = useState(new Date());
    const [date,setDate] = useState();

    const showData = () => {
        const date = day.target.value;
        setDate(date);
    }
  return (
    <>
      <Navbar2 order="calendar"/>
      <div className="data">
        <input type="date" className="Calendar_date" defaultValue={day} onChange={(d) => setDay(d)}/>
        <button className="show" onClick={showData}>SHOW</button>
      </div>
      {
        date&&
        <div className="item-container">
        {
            orders.map((i)=>{
                return(
                    date>i.date&&i.status==="In Process"?
                    (
                        <div className="item" key={i.id}>
                            <div className="id">Id : {i.id}</div>
                            <div className="cust_name">Customer Name : {i.cust_name}</div>
                            <div className="date">Date : {i.date}</div>
                            <div className="delivery_date">Delivery_Date : {i.date.substring(0,5)+String(Number(i.date.substring(5,7))+Number(Number(i.date.substring(8,10))>20))+"-"+String((Number(i.date.substring(8,10))+10)%31)}</div>
                            <div className="status">Status : {i.status}</div>
                        </div>
                    ):""
                )
            })
        }
        </div>
      }
    </>
  )
}

export default Calendar
