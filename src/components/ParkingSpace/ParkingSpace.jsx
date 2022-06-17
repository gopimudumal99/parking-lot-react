import React from 'react'
import "./ParkingSpace.css"
function ParkingSpace() {
  return (
    <div className='parking-container'>

        <div className='parking-space-first'>
         <div className='parking-space'>
            <div className='space 1'><span>1</span><button>leave</button></div>
            <div className='space 2'><span>2</span></div>
            <div className='space 3'><span>3</span></div>
            <div className='space 4'><span>4</span></div>
            <div className='space 5'><span>5</span></div>
            <div className='space 6'><span>6</span></div>
            <div className='space 7'><span>7</span></div>
            <div className='space 8'><span>8</span></div>
            <div className='space 9'><span>9</span></div>
         </div>
        </div>

        <div className='parking-space-second'>
            <div className='parking-space'>
                <div className='space 10'><span className='left'>10</span></div>
                <div className='space 11'><span className='left'>11</span></div>
                <div className='space 10'><span className='left'>12</span></div>
            </div>
            <span className='red'>Exit</span>
            <div className='cross'></div>
            <span className='green'>Entry</span>
            <div className='parking-space'>
                <div className='space 14'><span className='right'>13</span></div>
                <div className='space 15'><span className='right'>14</span></div>
                <div className='space 10'><span className='right'>15</span></div>
            </div>
        </div>

    </div>
  )
}

export default ParkingSpace