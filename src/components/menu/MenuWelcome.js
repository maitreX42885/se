import React, { useContext } from 'react'
import './css/MenuWelcome.css'
import { IoLocationSharp } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import { AuthContext } from '../Auth';
import { useNavigate } from 'react-router-dom';

function MenuWelcome() {

  const navigate = useNavigate()

  const { currentUser, currentUserAction } = useContext(AuthContext)

  const handleStart = ()=> {
    if (currentUser == null) {
      navigate('/login')
    }else {
      alert('hi')
    }
  }

  return (
    <div className='menu-welcome-container'>
        <img
          id='bg-welcome'
          src='https://images.unsplash.com/photo-1530347927633-5f393ff7abd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        />
        <div className='box1-welcome'>
          <h1>Title hello world</h1>
          <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins</p>
          <button type='button' onClick={handleStart}>GET START</button>
        </div>
        <div className='box2-welcome'>
          <div className='items-welcome'>
            <h3><IoLocationSharp/></h3>
            <p>Our Location</p>
            <p>Naresuan University</p>
          </div>
          <div className='items-welcome'>
            <h3><BsFacebook/></h3>
            <p>Our Facebook</p>
            <p>Facebook.com</p>
          </div>
          <div className='items-welcome'>
            <h3><AiFillPhone/></h3>
            <p>Our Contact</p>
            <p>000-0000-000</p>
          </div>
        </div>
    </div>
  )
}

export default MenuWelcome