import './DashboardAddTool.css'
import { BiBox } from "react-icons/bi";
import React from 'react'
import { FiBox } from 'react-icons/fi';
import Firebase from '../../back-end/FirebaseC';

function DashboardAddTool() {

  const Fb = new Firebase()
  const db = Fb.init_firebase()

  

  const onSubmit = async (e) => {
    e.preventDefault()
    const loadingDAT = document.getElementById('loading-DAT')
    loadingDAT.style.display = 'flex'
    const form = document.getElementById('form-DBAT')
    const all = []
    for (const i of e.target) {
      all.push(i.value)
    }
    const newAll = all.slice(0, 5)
    const obj = {
      id:newAll[0],
      title:newAll[1],
      subTitle:newAll[2],
      count:newAll[3],
      url:newAll[4],
    }
    
    const toolC = await Fb._add_tool_(db, newAll[0], obj)
    const p = document.getElementById('tool-check')
    const input = document.getElementById('DBAT-id')
    if (toolC === 'false') {
      
      p.style.visibility = 'visible'
      p.style.animation = 'shakeee 200ms ease-in-out'
      input.style.color = '#fe0000'
      setTimeout(()=>{
        p.style.animation = undefined
      }, 210)
    }else {
      p.style.visibility = 'hidden'
      alert("เพิ่มอุปกรณ์สำเร็จ")
      form.reset()
    }
    loadingDAT.style.display = 'none'
  }
  const handleID = (e)=> {
    let val = e.target.value
    if (val.length == 0) {
      document.getElementById('DBAT-id').style.color = 'var(--fontColorMain)'
    }
  }
  
  
  return (
    <div className='DBAT-container'>
      <div className='loading-DAT' id='loading-DAT'>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <div className='DBAT-header'>
        <h2>เพิ่มอุปกรณ์</h2>
        <h2><FiBox/></h2>
      </div>
      <div className='DBAT-content'>
        <form id='form-DBAT' onSubmit={onSubmit}>
          <p id='tool-check'>ID ของอุปกรณ์นี้มีอยู่ในระบบอยู่แล้ว</p>
          <input
            id='DBAT-id'
            type='text'
            onChange={handleID}
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
          <input
            type='text'
            placeholder='url อุปกรณ์*'
            required
          />
          <div id='form-DBAT-footer'>
            <button type='submit'>บันทึก</button>
            <button type='button' onClick={()=>document.getElementById('form-DBAT').reset()}>เคลียร์</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DashboardAddTool