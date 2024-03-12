import CloseIcon from '@mui/icons-material/Close';
import moment from "moment";
import React, { useContext, useState } from 'react';
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import { AuthContext } from "../../context/AuthContext";
import "./Calendar.css";

const localizer = momentLocalizer(moment);

function Calendar(props:Omit<CalendarProps,"localizer">) {
  const {orders} = useContext(AuthContext);
  const [id,setId] = useState("");
  const handleEvent=(event)=>{
    const i = event.title.substring(11,12);
    setId(i);
  }
  return (
    <>
      <BigCalendar 
        {...props} 
        localizer={localizer}
        onSelectEvent={(event) => handleEvent(event)}
        selectable
      />
      {
        id && orders.map((i)=>{
          return(
            (i.id===id) ?
            <div className="calendar_container">
              <div className="calendar_block parent">
                <CloseIcon className="calendar_close" onClick={()=>setId("")}/>
                <>
                      <div className="id">Id : {i.id}</div>
                      <div className="cust_name">Customer Name : {i.cust_name}</div>
                      <div className="date">Order_Date : {i.date}</div>
                      <div className="status">Status : {i.status}</div>
                </>
              </div>
            </div>
            :""
          )
        })
      }
    </>
  )
}

export default Calendar
