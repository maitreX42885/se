import React, { useEffect, useState } from 'react'
import './Login.css'
// import '../index.css'
import { FiMoon, FiSun } from "react-icons/fi";


const Login = () => {

    const [btnNightMode, setBtnNightMode] = useState('')
    useEffect(()=>{
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'false')
            setBtnNightMode('false')
        }else {
            if (localStorage.getItem('theme') === 'true') {
                setBtnNightMode('false')
            }else {
                setBtnNightMode('true')
            }
        }
    }, [])
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') === 'true') {
            document.documentElement.style.setProperty('--fontColorMain', '#fff');
            document.documentElement.style.setProperty('--primaryColor', '#000');       
        }else {
            document.documentElement.style.setProperty('--fontColorMain', '#000');
            document.documentElement.style.setProperty('--primaryColor', '#fff');
        }
    }
    const handleNightMode = ()=> {
        localStorage.setItem('theme', btnNightMode)
        if (btnNightMode === 'true') {// black
            document.getElementById('btnNightMode').style.animation = 'spinn 400ms'
            localStorage.setItem('theme', 'true')
            setBtnNightMode('false')
        }else { // white
            document.getElementById('btnNightMode').style.animation = 'spinn2 400ms'
            localStorage.setItem('theme', 'false')
            setBtnNightMode('true')
        }
    }
    

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Nice');
    }
    
  return (
    <div className='login-container'>
        <div className='l-login'>
            <div className='wrapper-l'>
                <img src='https://images.unsplash.com/photo-1426927308491-6380b6a9936f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'/>
            </div>
        </div>
        <div className='r-login'>
            <div className='register-link'>
                Not a member? <t/>
                <a href={'/register'}>
                    Register now
                </a>
            </div>
            <h2>Login</h2>
            <p className='subtitle'>Welcome to workshop service</p>
            <div className='wrapper-r' >
                <form id='form-login' className='form-login' onSubmit={onSubmit}>

                    <input 
                        type='text'
                        placeholder='รหัสนิสิต*'
                        required
                    />
                    <input 
                        type='password'
                        placeholder='password*'
                        required
                    />
                    <span id='hr-login'></span>
                    <div className='form-login-footer'>
                        <input 
                            type='submit'
                            value='Sign In'
                        />
                    </div>
                </form>
            </div>
            <div className='nightMode' >
                <button onClick={handleNightMode} id='btnNightMode'>{(localStorage.getItem('theme') === 'true') ? (<FiMoon />) : (<FiSun />)}</button>
            </div>
        </div>
    </div>
  )
}

export default Login;