import './App.css';
import React,{useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import ParkingSpace from './components/ParkingSpace/ParkingSpace';
import EntryData from './components/EntryData/EntryData';
import ExitVehicle from './components/Exit/ExitVehicle';
import ChargeAmmount from './components/Charges/ChargeAmmount';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Registration/Register';
import Login from './components/Registration/Login';

const data = {
  username: "",
  email: "",
  phoneNo: "",
  password: "",
  cpassword: ""
};

function App() {
  const [state, setState] = useState(data);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Navbar user= {user} setUser={setUser}/>
      <Routes>
        <Route path='/' element={ user.email ? <ParkingSpace /> : <h1 className='loggedIn'>Please Logged In!</h1> }/>
        <Route path='/register' element={<Register state={state} setState={setState}/>}/>
        <Route path='/login' element={<Login setUser={setUser} />}/>
        <Route path='/entryVehicle' element={<EntryData/>}/>
        <Route path='/exitVehicle' element={<ExitVehicle/>}/>
        <Route path ="/amount" element={<ChargeAmmount/>}/>
      </Routes>
    </div>
  );
}

export default App;
