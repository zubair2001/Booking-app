import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import './login.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const {loading,error,dispatch}=useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setCredentials({...credentials,[e.target.id]:e.target.value});
    }

    const handleClick = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res= await axios.post("http://localhost:8800/api/auth/login",credentials);
            dispatch({type:"LOGIN_SUCCESS",payload:res.data.details});
            navigate("/");
        }catch(err){
            dispatch({type:"LOGIN_FAILURE",payload:err.response.data});
        }
    }

    return (
        <>
            <Navbar />
            <Header type="list" />
            <div className='login'>
                <div className='lContainer'>
                    <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
                    <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
                    <button disabled={loading} className="lButton" onClick={handleClick}>Login</button>
                    {error && <span className="failure">{error.message}</span>}
                </div>
            </div>
        </>
    )
}

export default Login