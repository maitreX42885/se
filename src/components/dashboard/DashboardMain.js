import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function DashboardMain() {
  return (
    <div className='wrapper-dashboard-main'>
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
  )
}

export default DashboardMain