import React from 'react'
import "./ChargeAmount.css"
import {useNavigate} from 'react-router-dom'

function ChargeAmmount({exitAmount}) {
  let navigate = useNavigate()
   let minute = 1
   let result = 0
   let start = exitAmount[0].entryTime.split(":").map(Number)
   let end = exitAmount[0].exitTime.split(":").map(Number)
  
    if(start[0]<end[0]){
      result = result + ((end[0]-start[0])*60*minute) + ((end[1]-start[1])*minute)
  }
  else {
    result = result + (end[1]-start[1])*minute
  }

  // let hourData = (result/60).toFixed(2)+""
  // let singleHr 
  // if(hourData.includes(".")){
  //   var [hr,min] = hourData.split(".").map(Number)
  // }else{
  //   singleHr = hourData
  // }

  return (
 <div className='charge-container'>
    <div className='corss-icon' onClick={()=>navigate("/")}>&#x2718;</div>
     <div className='charge-details'>
        <div><span>Owner name :</span>{exitAmount[0].owner}</div>
        <div><span>Vehicle-type :</span> {exitAmount[0].vehiType}</div>
        <div><span>Total Time in mins :</span> {result} mins</div>
        <div><span>Total Amount :</span> ₹{result}</div>
        <h2>Thank You! </h2>
     </div>
</div>
  )
}

export default ChargeAmmount