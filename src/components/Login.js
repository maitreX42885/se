import React, { useEffect, useState } from 'react'
import './Login.css'
// import '../index.css'
import { FiEye, FiMoon, FiSun, FiEyeOff } from "react-icons/fi";
import Firebase from '../back-end/FirebaseC';


const Login = () => {

    const [togglepassword, setTogglePassword] = useState(false)
    const [btnNightMode, setBtnNightMode] = useState('')
    
    const Fb = new Firebase()
    const db = Fb.init_firebase()


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
    const handleTogglePassword = () => {
        if (togglepassword) {
            document.getElementById('password-login').type = 'password'
            setTogglePassword(false)
        }else {
            document.getElementById('password-login').type = 'text'
            setTogglePassword(true)
        }
         
    }
    const handleNumIncorrect = (e) => {
        let value = e.target.value
        if (value.length == 0) {
            document.getElementById('num-incorrect').style.visibility = 'hidden'
        }
    }
    const handlePasswordIncorrect = (e) => {
        let value = e.target.value
        if (value.length == 0) {
            document.getElementById('password-incorrect').style.visibility = 'hidden'
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const all = []
        for (let i of e.target) {
            all.push(i.value)
        }
        // Fb.login(db, [all[0], all[1]])
        Fb.login(db, [all[0], all[1]])
    }
    
  return (
    <div className='login-container'>
        <div className='loading' id='loading-wrapper'>
            <div class="drawing" id="loading">
                <div class="loading-dot"></div>
            </div>
        </div>
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

                    <span id='num-incorrect'>ไม่มีผู้ใช้บัญชีนี้</span>
                    <input 
                        onChange={handleNumIncorrect}
                        id='num-login'
                        type='text'
                        placeholder='รหัสนิสิต*'
                        required
                    />
                    <span id='password-incorrect'>รหัสผ่านไม่ถูกต้อง</span>
                    <input 
                        onChange={handlePasswordIncorrect}
                        id='password-login'
                        type='password'
                        placeholder='password*'
                        required
                        
                    />
                    <button type='button' id='btnTogglePassword' onClick={handleTogglePassword}>{(togglepassword) ? (<FiEye />) : (<FiEyeOff />)}</button>
                    

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
// f
// as
export default Login;