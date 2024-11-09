import React from 'react'
import { FaTimes,FaMinus,FaTh } from "react-icons/fa";
import { Chart as ChartJS, CategoryScale,LinearScale,PointElement, LineElement,Title, Tooltip, Legend, ArcElement} from 'chart.js';
import { Line,Doughnut } from 'react-chartjs-2';

ChartJS.register(CategoryScale,LinearScale, PointElement,LineElement,Title,Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);


const SalesGraph = () => {
  var display =0;

  const hideShow= ()=>{
    const div= document.getElementById('minimize');
     if(display === 1){
      div.style.display='block';
      display=0;
      
      
     }
     else{
      div.style.display='none';
      display = 1;

     }

  }

  const hide  =()=>{
    document.getElementById('salesdata').style.display='none';
  }
  return (


<>
<div id='salesdata' className="col-12 container-fluid " style={{background:"#35AEC1",padding:"20px",borderRadius:"4px"}}>
    <div className="d-flex justify-content-between p-2" >
        <h3 className='font-poppins'  style={{color:"white","font-size": "1.1rem",
    "font-weight": "600"}}><span className='mr-2'><FaTh/></span>Sales Graph</h3>
        <div className='d-flex'>
   
        <button type='button' onClick={hideShow}  className='btn bg-info mr-1 btn-sm text-white' data-card-widget="collapse"><FaMinus/></button>
        <button type='button' onClick={hide}  className='btn bg-info  btn-sm text-white' data-card-widget="collapse"><FaTimes/></button></div>
    </div>
    <div id='minimize' style={{minWidth:"300px"}}>
      <div  className='mt-3'> 
      <Line
      data={
        {
         
          labels:["2021 Q1","2021 Q2","2021 Q3","2021 Q4","2022 Q2","2022 Q3","2022 Q4","2023 Q1","2023 Q2"],
          datasets:[{
            id:"1000",
            labels:"Data 1",
            data:[2500,2500,3600,4000,5000,4500,10000,8000,15000,9000],
            backgroundColor: 'white',
            borderColor:"white",
            borderWidth:2,
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                
              }
            },
            
          }]

          
        }
      }
    options = {{
      responsive: true,    
          plugins: {
          legend: {
            display:false,
          },
          title: {
            display: false,
           
            
          },
        },
        scales:{
          x:{
            grid:{display:false},
            border:{
              display:false,
          }, 
          fontColor : 'white'           

          },
          y:{
            grid:{display:true,color:"white"}, border:{
              display:false
          }
          }
          
          
        }
      }
      }
      
      />
      </div>
      <div className='d-flex mt-4 mb-2 ml-4 mr-4 justify-content-around'>
        <div className="" style={{width:"100px"}}>

        <Doughnut 
  data = {
    {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [30,50],
        backgroundColor: [
          '#39cccc',
          'white',
          
        ],
        borderColor: [
          '#39cccc',
          'white',
         
        ],
        borderWidth: 1,
      },
    ],
    
  }} options = {{
    responsive: true,
    plugins: {
      legend: {
        display:false,
      },
      title: {
        display: true,
        text: 'Mail-Orders',
        position:"bottom",
        color:"white"
        
      },
 
    }
  }
  }
  
/>
        </div>
        <div className="" style={{width:"100px"}}>

<Doughnut 
data = {
{
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [
{
label: '# of Votes',
data: [30,50],
backgroundColor: [
  '#39cccc',
  'white',
  
],
borderColor: [
  '#39cccc',
  'white',
 
],
borderWidth: 1,
},
],

}} options = {{
responsive: true,
plugins: {
legend: {
display:false,
},
title: {
display: true,
text: 'Mail-Orders',
position:"bottom",
color:"white"

},
}
}
}

/>
</div> <div className="" style={{width:"100px"}}>

<Doughnut 
data = {
{
labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [
{
label: '# of Votes',
data: [30,50],
backgroundColor: [
  '#39cccc',
  'white',
  
],
borderColor: [
  '#39cccc',
  'white',
 
],
borderWidth: 1,
},
],

}} options = {{
responsive: true,
plugins: {
legend: {
display:false,
},
title: {
display: true,
text: 'Mail-Orders',
position:"bottom",
color:"white"

},
}
}
}

/>
</div>
</div>


      </div>
      </div>
</>  )
}

export default SalesGraph