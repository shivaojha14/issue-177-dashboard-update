import React from 'react'
import { FaDownload } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoReload } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa6";






export const StoreOverview = () => {
  return (
    <>
    <div className="card cont pb-4">
        <div className="card-header d-flex justify-content-between">
            <div className='mt-2'>            <h4 style={{color:"gray", "font-size": "1rem",
    "font-weight": "600"}} className='card-title' >Online Store Overview</h4>
</div>
     <div className='d-flex' style={{textDecoration:"none"}}>
     
     <span className='m-2' style={{cursor:"pointer"}}><FaDownload/></span>
              <span className='m-2' style={{cursor:"pointer"}}><IoMenu/></span>
          
    
        </div>
        </div>
        <div className="card-body p-4">
            <div className='todo d-flex justify-content-between p-2  ' style={{borderBottom:"1px solid gray"}}>
              <div className='d-flex' style={{color:"green"}}>
                <h5><IoReload/></h5></div>
              <div className=''>
                <div className="d-flex justify-content-end" > <h6 className='mr-2' style={{color:"green"}}><FaArrowUp/></h6> 12% </div>
                <div>Conversion rate</div> </div>
       
        </div>
        <div className='todo d-flex justify-content-between p-2' style={{borderBottom:"1px solid gray"}}>
              <div className='d-flex' style={{color:"Yellow"}}>
                <h5><HiOutlineShoppingCart/></h5></div>
              <div className=''>
                <div className="d-flex justify-content-end">   <h6 className='mr-2' style={{color:"yellow"}}><FaArrowUp/></h6>0.8% </div>
                <div>Sales rate</div> </div>
       
        </div>   <div className='todo d-flex justify-content-between p-2' style={{borderBottom:"1px solid gray"}}>
              <div className='d-flex' style={{color:"red"}}>
                <h5><FaUsers/></h5></div>
              <div className=''>
                <div className="d-flex justify-content-end"><h6 className='mr-2' style={{color:"red"}}><FaArrowUp/></h6>1% </div>
                <div>Registration rate</div> </div>
       
        </div>
        
    </div>
    </div>
    </>

 


  )
}
