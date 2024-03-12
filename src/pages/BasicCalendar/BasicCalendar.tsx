import React, { useContext } from 'react';
import Calendar from '../../components/Calendar2/Calendar.tsx';
import Navbar from '../../components/Navbar/Navbar.tsx';
import { AuthContext } from "../../context/AuthContext.js";

function BasicCalendar() {
  const {orders} = useContext(AuthContext);
  const events = [{}];
  orders.forEach((i)=>{
    if(i.status=="In Process")
    {
      const title = "Order Id : "+i.id;
      const start = i.date.substring(0,5)+String(Number(i.date.substring(5,7))+Number(Number(i.date.substring(8,10))>20))+"-"+String((Number(i.date.substring(8,10))+10)%31);
      const end = i.date.substring(0,5)+String(Number(i.date.substring(5,7))+Number(Number(i.date.substring(8,10))>20))+"-"+String((Number(i.date.substring(8,10))+10)%31);
      const event = {
        title : title,
        start : start,
        end : end
      };
      events.push(event);
    }
  })
  return (
    <div>
      <Navbar/>
      <div style={{height:"80vh"}}>
        <Calendar events={events}/>
      </div>
    </div>
  )
}

export default BasicCalendar
