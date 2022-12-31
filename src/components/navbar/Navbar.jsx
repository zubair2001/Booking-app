import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import Login from '../../pages/login/Login';
import './navbar.css'

const Navbar = () => {
    const {user} = useContext(AuthContext);

    const LoginClick = ()=>{
        localStorage.removeItem("user");
        window.location.replace("/login");
        dispatchEvent({type:"LOGOUT"})
    }

    const LoginPage = ()=>{
        window.location.replace("/login");
    }

    return (
        <div className='navbar'>
            <div className='navContainer'>
            <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
                <span className='logo' >Booking</span>
            </Link>
                {user ? <button className='navButton' onClick={LoginClick}>Logout</button>  : <div className='navItems'>
                    <button className='navButton' >Register</button>
                    <button className='navButton' onClick={LoginPage}>Login</button>
                </div>}
            </div>
        </div>
    )
}

export default Navbar