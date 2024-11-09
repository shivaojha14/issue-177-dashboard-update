import React, { useState, useEffect } from 'react';

import { SlCalender } from 'react-icons/sl';
import { FaTimes,FaMinus,FaTh } from "react-icons/fa";
import { MdArrowForwardIos,MdArrowBackIosNew } from "react-icons/md";
import '.././Style/Dashboard.css'


const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthName, setMonthName] = useState('');
  const [daysHTML, setDaysHTML] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    renderCalendar();
  }, [currentDate]); // Run renderCalendar whenever currentDate changes

  const renderCalendar = () => {
    const date = new Date(currentDate);
  
    date.setDate(1);

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;


    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let year = date.getUTCFullYear();

    document.getElementById("month-year").innerHTML = months[date.getMonth()] + " " + year ;

    setMonthName(months[date.getMonth()]);
    

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
      if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
    }

    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
    }

    setDaysHTML(days);
  };

  const handlePrevClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <>
      <div className="c">
        <div className="calendar">
        <div className="card-header  d-flex  justify-content-between">
<div className="d-flex mt-2 " style={{"alignItems":"center"}}> <h4 className='mr-2'><SlCalender/></h4> <h4 style={{"font-size": "1.1rem",
    "font-weight": "600"}}>Calander</h4>  </div>
<div className="mt-2"> 
        <button type='button'  className='btn bg-success mr-1 btn-sm text-white' data-card-widget="collapse"><FaMinus/></button>
        <button type='button'   className='btn bg-success  btn-sm text-white' ><FaTimes/></button>
        </div></div>
          <div className='m-4' >
          <div className='d-flex justify-content-between p-2'><span style={{cursor:"pointer"}}><MdArrowBackIosNew onClick={handlePrevClick} /></span> <h3 id='month-year'></h3> <span style={{cursor:"pointer"}}><MdArrowForwardIos onClick={handleNextClick}/></span></div>

          </div>
          <div className="weekdays ">
            <div>Su</div>
            <div>Mo</div>
            <div>Tu</div>
            <div>We</div>
            <div>Th</div>
            <div>Fr</div>
            <div>Sa</div>
          </div>
          <div className="days" dangerouslySetInnerHTML={{ __html: daysHTML }}></div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
