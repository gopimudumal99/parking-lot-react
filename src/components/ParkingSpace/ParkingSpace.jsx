import React from 'react'
import { Link } from 'react-router-dom'
import "./ParkingSpace.css"


function ParkingSpace() {
  let vehiclesEntries1  = JSON.parse(localStorage.getItem("vehicles1") || "[]")
  let vehiclesEntries2  = JSON.parse(localStorage.getItem("vehicles2") || "[]")
  let vehiclesEntries3  = JSON.parse(localStorage.getItem("vehicles3") || "[]")

  let firstPark = new Array(9).fill(0)
  let secondPark = new Array(3).fill(0)
  let thirdPark = new Array(3).fill(0)
  return (
    <div className='parking-container'>
        <div className='parking-space-first'>
         <div className='parking-space'>
          {firstPark.map((slot,i)=>{
           return <div key = {i} className='space ' style={{backgroundImage: vehiclesEntries1[i] ? vehiclesEntries1[i].vehiType==='car'?  `url('/images/redcar.png')`:vehiclesEntries1[i].vehiType==='auto'?`url(/images/auto.png)`: `url(/images/bike.png)`:null}}><span>{i+1}</span></div>
          })}

         </div>
        </div>

        <div className='parking-space-second'>
            <div className='parking-space'>
            {secondPark.map((slot,i)=>{
           return <div key = {i} className='space ' style={{backgroundImage: vehiclesEntries2[i] ? vehiclesEntries2[i].vehiType==='car'?  `url('/images/car1.png')`:vehiclesEntries2[i].vehiType==='auto'?`url(/images/auto2.png)`: `url(/images/bike2.png)`:null}}><span className='left'>{i+10} </span></div>
          })}
                
            </div>
            <Link to='/exitVehicle' > <span className='red'>Exit</span> </Link>
            <div className='cross'></div>
            <Link to='/entryVehicle' > <span className='green'>Entry</span> </Link>
            <div className='parking-space'>
            {thirdPark.map((slot,i)=>{
           return <div key = {i} className='space ' style={{backgroundImage: vehiclesEntries3[i] ? vehiclesEntries3[i].vehiType==='car'?  `url('/images/redcar.png')`:vehiclesEntries3[i].vehiType==='auto'?`url(/images/auto2.png)`: `url(/images/bike2.png)`:null}}><span className='right'>{i+13}</span></div>
          })}
                
            </div>
        </div>

    </div>
  )
}

export default ParkingSpace