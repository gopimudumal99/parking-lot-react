import React from 'react'
import "./Navbar.css"
import {Link,useNavigate} from "react-router-dom"

  
function Navbar({user,setUser}) {
    let navigate = useNavigate()

    const logoutBtn = () =>{
        navigate('/login')
        setUser({})
    }
  return (
        <nav>
            <ul>
                <li><Link to="/"> Home </Link></li>
            </ul>
            <ul>
                <li>{user.email ? user.email:<Link to="/register"> Register </Link>}</li>
            </ul>
            <ul>
                <li>{user.email ? <span onClick={()=>logoutBtn()}>logout</span> :<Link to="/login"> Login </Link>}</li>
            </ul>
        </nav>
  )
}

export default Navbar