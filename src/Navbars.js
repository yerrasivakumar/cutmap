import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import './App.css'

const Navbar = () => {
  const [user,setUsername] = useState('');
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
         <Typography variant='h4' >CUTMAP-Transport</Typography>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
         <h3>=</h3>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {
      user?<li >
      <NavLink to="/Logout" >Logout </NavLink>
    </li> : <li >
   
                <button className='button1'  style={{fontSize:"20px", borderRadius:"20px",marginRight:'10px', boxShadow:"2px",cursor:'pointer'}}
                >
                  Login
                </button>
                {/* style={{backgroundColor:'#041f62',padding:"6px",color:'white',fontSize:"15px",fontWeight:'bold',borderRadius:'10px',marginRight:'8px',boxShadow:'none',}} */}
            
                <button  className='button1' style={{fontSize:"20px", borderRadius:"20px",marginRight:'8px', boxShadow:"2px" ,cursor:"pointer"}}
                >
                  SignIn
                </button>
            
         
    </li>
    }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar