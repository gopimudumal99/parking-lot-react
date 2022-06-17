import './App.css';
import React,{useState} from 'react'
import ParkingSpace from './components/ParkingSpace/ParkingSpace';
import EntryData from './components/Registration/EntryData';
import ExitVehicle from './components/Exit/ExitVehicle';

function App() {
  const[isEntryData,setIsEntryData] = useState(false)
  const[isExit,setIsExit] = useState(false)

  console.log(isEntryData)
  return (
    <div className="App">
      
    {
      !isEntryData ? !isExit ?<ParkingSpace setIsEntryData={setIsEntryData} setIsExit={setIsExit}/>:<ExitVehicle setIsExit={setIsExit}/> :<EntryData setIsEntryData={setIsEntryData}/>
    }
    
    </div>
  );
}

export default App;
