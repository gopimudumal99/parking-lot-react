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
  console.log(vehiclesEntries1)
  return (
    <div className='parking-container'>
        <div className='parking-space-first'>
         <div className='parking-space'>
          {firstPark.map((slot,i)=>{
           return <div key = {i} className='space ' style={{backgroundImage: vehiclesEntries1[i] ? vehiclesEntries1[i].vehiType==='car'?  `url('/images/redcar.png')`: `url(/images/bike.png)`:null}}><span>{i+1}</span></div>
          })}

            {/* <div className='space 1' style={{backgroundImage: vehiclesEntries[0] ? `url('/images/redcar.png')`: null}} ><span>1</span></div>
            <div className='space 2' style={{backgroundImage: vehiclesEntries[1] ? `url('/images/redcar.png')`: null}}><span>2</span></div>
            <div className='space 3' style={{backgroundImage: vehiclesEntries[2] ? `url('/images/redcar.png')`: null}}><span>3</span></div>
            <div className='space 4' style={{backgroundImage: vehiclesEntries[3] ? `url('/images/redcar.png')`: null}}><span>4</span></div>
            <div className='space 5' style={{backgroundImage: vehiclesEntries[4] ? `url('/images/redcar.png')`: null}}><span>5</span></div>
            <div className='space 6' style={{backgroundImage: vehiclesEntries[5] ? `url('/images/redcar.png')`: null}}><span>6</span></div>
            <div className='space 7' style={{backgroundImage: vehiclesEntries[6] ? `url('/images/redcar.png')`: null}}><span>7</span></div>
            <div className='space 8' style={{backgroundImage: vehiclesEntries[7] ? `url('/images/redcar.png')`: null}}><span>8</span></div>
            <div className='space 9' style={{backgroundImage: vehiclesEntries[8] ? `url('/images/redcar.png')`: null}}><span>9</span></div> */}
         </div>
        </div>

        <div className='parking-space-second'>
            <div className='parking-space'>
            {secondPark.map((slot,i)=>{
           return <div key = {i} className='space ' style={{backgroundImage: vehiclesEntries2[i] ? `url('/images/redcar.png')`: null}}><span className='left'>{i+10}</span></div>
          })}
                {/* <div className='space 10'><span className='left'>10</span></div>
                <div className='space 11'><span className='left'>11</span></div>
                <div className='space 10'><span className='left'>12</span></div> */}
            </div>
            <Link to='/exitVehicle' > <span className='red'>Exit</span> </Link>
            <div className='cross'></div>
            <Link to='/entryVehicle' > <span className='green'>Entry</span> </Link>
            <div className='parking-space'>
            {thirdPark.map((slot,i)=>{
           return <div key = {i} className='space ' style={{backgroundImage: vehiclesEntries3[i] ? `url('/images/car1.png')`: null}}><span className='right'>{i+13}</span></div>
          })}
                {/* <div className='space 14'><span className='right'>13</span></div>
                <div className='space 15'><span className='right'>14</span></div>
                <div className='space 10'><span className='right'>15</span></div> */}
            </div>
        </div>

    </div>
  )
}

export default ParkingSpace