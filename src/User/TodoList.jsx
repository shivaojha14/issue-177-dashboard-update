import React from 'react'
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from "react-icons/ai";
import {PiDotsSixVerticalBold } from "react-icons/pi";
import {BiTimeFive } from "react-icons/bi";
import {FiEdit } from "react-icons/fi";
 import "../Style/Dashboard.css";



import { Checkbox } from '@mui/material';




const TodoList = () => {


    const depricate =()=>{
      if (document.getElementById("check").checked) {
        document.getElementById("txt").style.textDecoration = "line-through";
        document.getElementById("txt").style.color="gray";

    }
    else{
        document.getElementById("txt").style.textDecoration = "none";    


    }
  
}
  return (
    <>
    <div className="card cont">
        <div className="card-header d-flex justify-content-between">
            <div className='mt-2'>            <h4 style={{color:"gray" ,"font-size": "1rem",
    "font-weight": "600"}} className='card-title' > <RiTodoLine className='mr-2' />Todo List</h4>
</div>
     <div className='d-flex' style={{textDecoration:"none"}}>
      <ul className='d-flex'>
            <li ><a href='#' className='page-link'> <AiOutlineDoubleLeft/> </a></li>
            <li ><a href='#' className='page-link'>1</a></li>
            <li ><a href='#' className='page-link'>2</a></li>
            <li ><a href='#' className='page-link'>3</a></li>
            <li ><a href='#' className='page-link'><AiOutlineDoubleRight/></a></li>
            </ul>
   
          
    
        </div>
        </div>
        <div className="card-body">
         <div className="d-flex m-2 justify-content-between">
            <div className='todo'>
        <PiDotsSixVerticalBold  style={{fontSize:"25px"}}  className=''/> <Checkbox id='check'  onClick={depricate}/>
            <span id='txt' className='text mt-2 ml-2'> <b style={{color:"darkgray"}}>Design a nice Theme</b></span> <small className='badge badge-danger text-white mt-2 mb-3 ml-2'> <BiTimeFive/> 2 mins</small> </div>
      <span className='pr-2 edit'> <h5 style={{color:"red"}}><FiEdit/></h5> </span> 
            </div>
            <div className="d-flex m-2 justify-content-between">
            <div className='todo'>
        <PiDotsSixVerticalBold  style={{fontSize:"25px"}}  className=''/> <Checkbox id='check'  onClick={depricate}/>
            <span id='txt' className='text mt-2 ml-2'> <b style={{color:"darkgray"}}>Design a nice Theme</b></span> <small className='badge badge-danger text-white mt-2 mb-3 ml-2'> <BiTimeFive/> 2 mins</small> </div>
      <span className='pr-2 edit'> <h5 style={{color:"red"}}><FiEdit/></h5> </span> 
            </div> <div className="d-flex m-2 justify-content-between">
            <div className='todo'>
        <PiDotsSixVerticalBold  style={{fontSize:"25px"}}  className=''/> <Checkbox id='check'  onClick={depricate}/>
            <span id='txt' className='text mt-2 ml-2'> <b style={{color:"darkgray"}}>Design a nice Theme</b></span> <small className='badge badge-danger text-white mt-2 mb-3 ml-2'> <BiTimeFive/> 2 mins</small> </div>
      <span className='pr-2 edit'> <h5 style={{color:"red"}}><FiEdit/></h5> </span> 
            </div> <div className="d-flex m-2 justify-content-between">
            <div className='todo'>
        <PiDotsSixVerticalBold  style={{fontSize:"25px"}}  className=''/> <Checkbox id='check'  onClick={depricate}/>
            <span id='txt' className='text mt-2 ml-2'> <b style={{color:"darkgray"}}>Design a nice Theme</b></span> <small className='badge badge-danger text-white mt-2 mb-3 ml-2'> <BiTimeFive/> 2 mins</small> </div>
      <span className='pr-2 edit'> <h5 style={{color:"red"}}><FiEdit/></h5> </span> 
            </div>
        </div>
        <div className="card-footer d-flex justify-content-end">
            <button className='btn btn-primary'>Add Item</button>
        </div>
    </div>
    
    </>
  )
}

export default TodoList