import './DashboardAddTool.css'
import { BiBox } from "react-icons/bi";
import React from 'react'
import { FiBox } from 'react-icons/fi';

function DashboardAddTool() {
  return (
    <div className='DBAT-container'>
      <div className='DBAT-header'>
        <h2>เพิ่มอุปกรณ์</h2>
        <h2><FiBox/></h2>
      </div>
      <div className='DBAT-content'>
        <form id='form-DBAT'>
          <p id='tool-check'>ID ของอุปกรณ์นี้มีอยู่ในระบบอยู่แล้ว</p>
          <input
            type='text'
            placeholder='ID อุปกรณ์*'
            required
          />
          <input
            type='text'
            placeholder='ชื่ออุปกรณ์*'
            required
          />
          <textarea
            type='text'
            placeholder='คำอธิบาย หรือ -*'
            required
          />
          <input
            type='number'
            placeholder='จำนวน*'
            required
          />
          <div id='form-DBAT-footer'>
            <button>บันทึก</button>
            <button>เคลียร์</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashboardAddTool