import React from 'react'
import "./EntryData.css"
function EntryData({setIsEntryData}) {

    const closeBtn = () =>{
        setIsEntryData(false)
    }


  return (
    <div className='entry-container'>
        <div className='corss-icon' onClick={()=>closeBtn()}>&#x2718;</div>
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
            <label htmlFor="entry-date">Entry Date</label>
            <input type="date" name="entry-date" id="entry-date" />
            <label htmlFor="entry-time">Entry Time</label>
            <input type="time" name="entry-time" id="entry-time" />
            <label htmlFor="exit-date">Exit Date</label>
            <input type="date" name="exit-date" id="exit-date" />
            <label htmlFor="exit-time">Exit Time</label>
            <input type="time" name="exit-time" id="exit-time"/>

            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default EntryData