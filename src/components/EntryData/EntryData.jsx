import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import "./EntryData.css"


let vehicleData = {
    owner:"",
    vehiType:"",
    vehiNumber:"",
    entryDate:"",
    entryTime:"",
    exitDate:"",
    exitTime:""
}

function EntryData() {
    const [vehicle,setVehicle] = useState(vehicleData)
    let vehiclesEntries1  = JSON.parse(localStorage.getItem("vehicles1") || "[]")
    let vehiclesEntries2  = JSON.parse(localStorage.getItem("vehicles2") || "[]")
    let vehiclesEntries3  = JSON.parse(localStorage.getItem("vehicles3") || "[]")

    let navigate = useNavigate()

    let handleInput = (e) =>{
            let {name,value} = e.target;
            setVehicle({...vehicle,[name]:value})
    }
    
    let vehicleEntrySubmit = (e) =>{
        e.preventDefault();
        if(vehiclesEntries1.length <=10){
            vehiclesEntries1.push(vehicle)
            localStorage.setItem("vehicles1",JSON.stringify(vehiclesEntries1))
        }else if(vehiclesEntries2.length <= 3){
            vehiclesEntries2.push(vehicle)
            localStorage.setItem("vehicles2",JSON.stringify(vehiclesEntries2))
        }else if(vehiclesEntries3.length <= 3){
            vehiclesEntries3.push(vehicle)
            localStorage.setItem("vehicles3",JSON.stringify(vehiclesEntries3))
        }else{
            alert("No space available")
            navigate("/")
            return
        }
        alert("successfully parked the vehicle")
        navigate("/")
    }

  return (
    <div className='entry-container'>
        <div className='corss-icon' onClick={()=>navigate("/")}>&#x2718;</div>
        <form action="" onSubmit={(e)=>vehicleEntrySubmit(e)}>
            <label htmlFor="owner">
                Owner name
            </label>
            <input type="text" name="owner" value={vehicle.owner} id="owner" placeholder='Enter vehicle owner name' onChange={handleInput} required/>
            <label htmlFor="vehiType">
            Vehicle Type 
            </label>
            <select name="vehiType" id="vehiType" value={vehicle.vehiType} onChange={handleInput} required>
                <option value="--">please select</option>
                <option value="car">4 wheeler</option>
                <option value="bike">2 wheeler</option>
                <option value="auto">3 wheeler</option>
            </select>
            <label htmlFor="vehiNumber"> Vehicle Number</label>
            <input type="text" name="vehiNumber" value={vehicle.vehiNumber} id="vehiNumber" placeholder='NN-NN-NN plese give proper vehicle-number' onChange={handleInput} required/>
            <label htmlFor="entryDate">Entry Date</label>
            <input type="date" name="entryDate" value={vehicle.entryDate} id="entryDate" onChange={handleInput} required/>
            <label htmlFor="entryTime">Entry Time</label>
            <input type="time" name="entryTime" value={vehicle.entryTime} id="entryTime" onChange={handleInput} required/>
            <label htmlFor="exitDate">Exit Date</label>
            <input type="date" name="exitDate" value={vehicle.exitDate} id="exitDate" onChange={handleInput} required/>
            <label htmlFor="exitTime">Exit Time</label>
            <input type="time" name="exitTime" value={vehicle.exitTime} id="exitTime"onChange={handleInput} required/>

            <button type='submit'>Submit</button>
        </form>


    </div>
  )
}

export default EntryData