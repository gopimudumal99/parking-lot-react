import React from 'react'
import "./ExitVehicle.css"
function ExitVehicle({setIsExit}) {
  return (
    <div className='exit-container'>
    <div className='corss-icon' onClick={()=>setIsExit(false)}>&#x2718;</div>
    <form action="">
        <label htmlFor="owner">
            Owner name
        </label>
        <input type="text" name="owner" id="owner" placeholder='Enter vehicle owner name' />
        <label htmlFor="v-type">
        Vehicle Type 
        </label>
        <select name="v-type" id="v-type">
            <option value="--">please select</option>
            <option value="car">4 wheeler</option>
            <option value="bike">2 wheeler</option>
            <option value="auto">3 wheeler</option>
        </select>
        <label htmlFor="v-number"> Vehicle Number</label>
        <input type="text" name="v-number" id="v-number" placeholder='NN-NN-NN plese give proper vehicle-number' />
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default ExitVehicle