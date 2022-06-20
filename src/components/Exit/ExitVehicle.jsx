import React,{useState} from 'react'
import "./ExitVehicle.css"
import {useNavigate} from 'react-router-dom'

let exitVehicleData = {
  vehiOwner:"",
  vehiType:"",
  vehiNumber:""
}

function ExitVehicle() {
  let navigate = useNavigate()
  const [exitVehicle,setExitVehicle] = useState(exitVehicleData)

  let vehiclesEntries1  = JSON.parse(localStorage.getItem("vehicles1") || "[]")
  let vehiclesEntries2  = JSON.parse(localStorage.getItem("vehicles2") || "[]")
  let vehiclesEntries3  = JSON.parse(localStorage.getItem("vehicles3") || "[]")

  const handleInput = (e) =>{
    let {name,value} = e.target;
    setExitVehicle({...exitVehicle,[name]:value})
  } 

  const exitSubmit = (e) =>{
      e.preventDefault();
 
      let exitVehi1= vehiclesEntries1 && vehiclesEntries1.filter(vehi => (vehi.owner !== exitVehicle.vehiOwner || vehi.vehiNumber !== exitVehicle.vehiNumber || vehi.vehiType !== exitVehicle.vehiType))
      let exitVehi2= vehiclesEntries2 && vehiclesEntries2.filter(vehi => (vehi.owner !== exitVehicle.vehiOwner || vehi.vehiNumber !== exitVehicle.vehiNumber || vehi.vehiType !== exitVehicle.vehiType))
      let exitVehi3= vehiclesEntries3 && vehiclesEntries3.filter(vehi => (vehi.owner !== exitVehicle.vehiOwner || vehi.vehiNumber !== exitVehicle.vehiNumber || vehi.vehiType !== exitVehicle.vehiType))

      if(exitVehi1.length < vehiclesEntries1.length){
        localStorage.setItem("vehicles1",JSON.stringify(exitVehi1))
        navigate("/")
        alert("exited!")
        return
      }else if (exitVehi2.length < vehiclesEntries2.length){
        localStorage.setItem("vehicles2",JSON.stringify(exitVehi2))
        navigate("/")
        alert("exited!")

      }else if (exitVehi3.length < vehiclesEntries3.length){
        localStorage.setItem("vehicles3",JSON.stringify(exitVehi3))
        navigate("/")
        alert("exited!")
      }else {
        alert("Given information vehicle is not there ")
      }
  }

  return (
    <div className='exit-container'>
    <div className='corss-icon' onClick={()=>navigate("/")}>&#x2718;</div>
    <form action="" onSubmit={(e)=>exitSubmit(e)}>
        <label htmlFor="owner">
            Owner name
        </label>
        <input type="text" value={exitVehicle.vehiOwner} onChange={handleInput} name="vehiOwner" id="owner" placeholder='Enter vehicle owner name' required/>
        <label htmlFor="v-type">
        Vehicle Type 
        </label>
        <select name="vehiType" id="v-type" value={exitVehicle.vehiType} onChange={handleInput} required>
            <option value="--">please select</option>
            <option value="car">4 wheeler</option>
            <option value="bike">2 wheeler</option>
            <option value="auto">3 wheeler</option>
        </select>
        <label htmlFor="v-number"> Vehicle Number</label>
        <input type="text" name="vehiNumber" value={exitVehicle.vehiNumber} onChange={handleInput} id="v-number" placeholder='NN-NN-NN plese give proper vehicle-number' required/>
        <button type='submit'>Submit</button>
    </form>
</div>
  )
}

export default ExitVehicle