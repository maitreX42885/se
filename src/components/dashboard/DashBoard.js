import React, { useContext } from 'react'
import { AuthContext } from '../Auth';
import './Dashboard.css'
import { BiBox, BiHomeAlt, BiUser, BiUserPlus } from "react-icons/bi";
import { FiArrowRight, FiBox } from "react-icons/fi";
function DashBoard() {

    const {currentUser, currentUserAction} = useContext(AuthContext)

    // console.log(currentUser)

  return (
    <div>
        <div className='dashboard-container'>
          <div className='dashboard-aside'>
            <div className='dashboard-aside-wrapper'>
              <div className='dashboard-aside-header'>
                <h2>DashBoard</h2>
              </div>
              <div className='dashboard-aside-items'>
                <h4>Quick Acess</h4>
                <div><BiHomeAlt/>| หน้าหลัก</div>
                <div><BiUser/>| สมาชิก</div>
                <div><BiBox/>| อุปกรณ์</div>
                <div>4</div>
                <div>5</div>
              </div>
              <div className='dashboard-aside-items'>
                <h4>Settings</h4>
                <div><BiUserPlus/>| เพื่มสมาชิก</div>
                <div><FiBox/>| เพื่มอุปกรณ์</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
              </div>
            </div>
          </div>
          <div className='dashboard-content'>
            <div className='dashboard-content-header'>
              <h2>Welcome</h2>
              <p>ชมรมพัฒนาชนบท</p>
            </div>
            <div className='dashboard-content-middle'>
              <img 
                src='https://images.unsplash.com/photo-1478116285712-2d465a7f29b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
                alt='logo-dashboard'
              />
              <h4>Just Text</h4>
            </div>
            <div className='dashboard-content-footer'>
              <div className='dashboard-content-footer-left'>
                  <div className='dashboard-content-footer-left-head'>
                    <h3>อุปกรณ์</h3>
                    <div>
                      <button type='button'>See all</button>
                      <FiArrowRight/>
                    </div>
                  </div>
                  <div className='dashboard-content-footer-left-content'>
                    <div>ad</div>
                    <div>ad</div>
                    <div>ad</div>
                    <div>ad</div>
                    <div>ad</div>
                    <div>ad</div>
                    <div>ad</div>
                  
                    
                  </div>
              </div>
              <div className='dashboard-content-footer-right'>
                  <div className='dashboard-content-footer-right-head'>
                    <h3>สมาชิก</h3>
                      <div>
                        <button type='button'>See all</button>
                        <FiArrowRight/>
                      </div>
                  </div>
                  <div className='dashboard-content-footer-right-content'>
                    <div>NICE</div>
                    <div>NICE</div>
                    <div>NICE</div>
                    <div>NICE</div>
                    <div>NICE</div>
                    <div>NICE</div>
                    <div>NICE</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default DashBoard;