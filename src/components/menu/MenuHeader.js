import React, { useContext, useEffect, useState } from 'react'
import './css/MenuHeader.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { HeaderContext } from './checkBtnHeader';
import { GrClose } from "react-icons/gr";
import { AuthContext } from '../Auth';
import { useNavigate } from 'react-router-dom';


function MenuHeader() {

  const nevigate = useNavigate()
  const {btnHeaderMobile, btnMobileAction} = useContext(HeaderContext)
  const { currentUser, currentUserAction } = useContext(AuthContext)
 
  const handleStart = (e)=> {
    console.log(e.target.value)
    if (e.target.value === "login") {
      nevigate('/login')
    }else {
      nevigate('/register')
    }
  }

  useEffect(()=>{
    const headerN = document.getElementById('wrapper-menu')
    const headerAuth = document.getElementById('wrapper-menu-auth')
    if (currentUser == null) {
      headerN.style.display = 'block'
      headerAuth.style.display = 'none'
    }else {
      console.log(currentUser)
      const dboard = document.getElementById('btnDashboard')
      if (currentUser == "admin") {
        headerN.style.display = 'none'
        headerAuth.style.display = 'block'
        dboard.style.display = 'block'
        createBtnDashboard()
      }else {
        headerN.style.display = 'none'
        headerAuth.style.display = 'block'
        dboard.style.display = 'none'
      }
      
    }
  }, [currentUser])

  const handleMobile = () => {
    const hams = document.getElementById('btn-mobile-content')
    if (btnHeaderMobile == 1) {
      
      hams.style.animation = 'centerToright 200ms ease-in-out'
      
      setTimeout(()=>{
        hams.style.animation = undefined
        hams.style.display = 'none'
        btnMobileAction.setBtn(0)
      }, 199)
      
    }else {
      hams.style.display = 'flex'
      hams.style.animation = 'leftTocenter 300ms ease-in-out'
      setTimeout(()=>{
        hams.style.animation = undefined
        btnMobileAction.setBtn(1)
      }, 299)
    }
  }

  const handleMobileAuth = ()=>{
    const hams = document.getElementById('btn-mobile-content-auth')
    
    if (btnHeaderMobile == 1) {
      hams.style.animation = 'centerToright 200ms ease-in-out'
      
      setTimeout(()=>{
        
        hams.style.animation = undefined
        hams.style.display = 'none'
        btnMobileAction.setBtn(0)
      }, 199)
    }else {
      hams.style.display = 'flex'
      hams.style.animation = 'leftTocenter 300ms ease-in-out'
      
      setTimeout(()=>{
        hams.style.animation = undefined
        btnMobileAction.setBtn(1)
      }, 299)
    }
  }

  const signOut = ()=> {
    currentUserAction.setSession(null)
  }

  function createBtnDashboard() {
    const btnDashID = document.getElementById('btnDashboardMobile')
    const body = document.getElementById('btn-mobile-content-auth')
    const body2 = document.getElementById('menu-other-auth')
    if (btnDashID) {
      btnDashID.remove()
    }
    const btnD = document.createElement('button')
    btnD.id = 'btnDashboardMobile'
    btnD.type = 'button'
    btnD.innerHTML = 'Dashboard'
    body.append(btnD)
    
  }

  return (
    <div className='header-container'>
        <div className='logo-header'>
          <img 
            alt='logo'
            src='https://images.unsplash.com/photo-1494871262121-49703fd34e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          />
        </div>
        <div className='content-header'>
          <div className='wrapper-menu' id='wrapper-menu'>
            <div className='menu-other'>
              <button type='button' onClick={handleStart} value='register'>Sign Up</button>
              <button type='button' onClick={handleStart} value='login'>Sign In</button>
            </div>
            <div className='menu-mobile' id='menu-mobile'>
              <div className='btn-mobile' onClick={handleMobile} >
                {(btnHeaderMobile == 1) ? (<GrClose/>) : (<GiHamburgerMenu/>)}
              </div>
              <div className='btn-mobile-content' id='btn-mobile-content'>
                <button type='button' onClick={handleStart} value='register'>Sign Up</button>
                <button type='button' onClick={handleStart} value='login'>Sign In</button>
              </div>
            </div>
          </div>
          <div className='wrapper-menu-auth' id='wrapper-menu-auth'>

            <div className='menu-other-auth' id='menu-other-auth'>
              <button type='button' >Home</button>
              <button type='button' >About</button>
              <button type='button' id='btnDashboard'>Dashboard</button>
              <button type='button' onClick={signOut}>Sign Out</button>
            </div>
            <div className='menu-mobile-auth'>
              <div className='btn-mobile' onClick={handleMobileAuth} id='btn-mobile'>
                {(btnHeaderMobile == 1) ? (<GrClose/>) : (<GiHamburgerMenu/>)}
              </div>
              <div className='btn-mobile-content-auth' id='btn-mobile-content-auth'>
                <button type='button' >Home</button>
                <button type='button' >About</button>
                <button type='button' onClick={signOut}>Sign Out</button>
                
              </div>
            </div>
            
            
          </div>
          
        </div>
    </div>
  )
}

export default MenuHeader