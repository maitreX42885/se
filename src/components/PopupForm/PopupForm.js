import './PopupForm.css'

import React, { useContext, useEffect } from 'react'
import { ValPopupContext } from './ValPopup'
import { AiOutlineClose } from "react-icons/ai";
import Firebase from '../../back-end/FirebaseC';

export default function PopupForm_EditUser(props) {

  const {ValPopup, ValPopupAction} = useContext(ValPopupContext)
  const fb = new Firebase()
  const db = fb.init_firebase()


  useEffect(()=>{
    createForm()
  }, [])

  const handleClose = () => {
    // alert(props.title)
    ValPopupAction.setVal(0)
  }

  const handleTel = (e)=> {
    let value = e.target.value
    value = value.replace(/\D/g, ""); // remove non-numeric characters
    value = value.substring(0, 10); // limit to 10 digits
    value = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"); // add formatting
    e.target.value = value
  }

  const createForm = (x) => {
    const wrapperHeader = document.getElementById('PFEU-form-header')
    const wrapperFooter = document.getElementById('PFEU-form-footer')
    const h4 = document.createElement('h4')
    const btnSave = document.createElement('button')

    h4.innerHTML = `Edit : ${props.title}`
    wrapperHeader.append(h4)

    btnSave.id = props.title
    btnSave.innerHTML = 'บันทึก'
    wrapperFooter.append(btnSave)
  }

  const onSubmit = async (e) => {
    
    e.preventDefault()
    const data = {
      name:e.target[0].value,
      faculty:e.target[1].value,
      class:e.target[2].value,
      phone:e.target[3].value,
      email:e.target[4].value,
      permission:e.target[5].value
    }
    await fb._editUser_(db, props.title, data)
    ValPopupAction.setVal(0)
  }

  return (
    <div className='PopupFormEditUser-container'>
        <div className='PFEU-Form'>
          <div className='PFEU-header'>
            <button type='button' onClick={handleClose}><AiOutlineClose/></button>
          </div>
          <div className='PFEU-content'>
            <form onSubmit={onSubmit}>
              <div className='PFEU-form-header' id='PFEU-form-header'></div>
              <div className='PFEU-form-content'>
                <input
                  type='text'
                  placeholder='ชื่อ'
                  required
                />
                <select required>
                  <option value=''>คณะ</option>
                  <option value="บัณฑิตวิทยาลัย">0 : บัณฑิตวิทยาลัย</option>
                  <option value="วิทยาลัยพลังงานทดแทนและสมาร์ตกริดเทคโนโลยี">1 : วิทยาลัยพลังงานทดแทนและสมาร์ตกริดเทคโนโลยี</option>
                  <option value="สถานการศึกษาต่อเนื่อง">2 : สถานการศึกษาต่อเนื่อง</option>
                  <option value="คณะโลจิสติกส์และดิจิทัลซัพพลายเชน">3 : คณะโลจิสติกส์และดิจิทัลซัพพลายเชน</option>
                  <option value="วิทยาลัยเพื่อการค้นคว้าระดับรากฐาน">4 : วิทยาลัยเพื่อการค้นคว้าระดับรากฐาน</option>
                  <option value="สถานพัฒนาวิชาการด้านภาษา">5 : สถานพัฒนาวิชาการด้านภาษา</option>
                  <option value="วิทยาลัยการจัดการระบบสุขภาพ">6 : วิทยาลัยการจัดการระบบสุขภาพ</option>
                  <option value="วิทยาลัยนานาชาติ">7 : วิทยาลัยนานาชาติ</option>
                  <option value="คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม">8 : คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม</option>
                  <option value="คณะเภสัชศาสตร์">9 : คณะเภสัชศาสตร์</option>
                  <option value="คณะวิทยาศาสตร์">10 : คณะวิทยาศาสตร์</option>
                  <option value="คณะวิศวกรรมศาสตร์">11 : คณะวิศวกรรมศาสตร์</option>
                  <option value="คณะศึกษาศาสตร์">12 : คณะศึกษาศาสตร์</option>
                  <option value="คณะแพทยศาสตร์">13 : คณะแพทยศาสตร์</option>
                  <option value="คณะสาธารณสุขศาสตร์">14 : คณะสาธารณสุขศาสตร์</option>
                  <option value="คณะวิทยาศาสตร์การแพทย์">15 : คณะวิทยาศาสตร์การแพทย์</option>
                  <option value="คณะพยาบาลศาสตร์">16 : คณะพยาบาลศาสตร์</option>
                  <option value="คณะทันตแพทยศาสตร์">17 : คณะทันตแพทยศาสตร์</option>
                  <option value="คณะสหเวชศาสตร์">18 : คณะสหเวชศาสตร์</option>
                  <option value="คณะสถาปัตยกรรมศาสตร์ ศิลปะและการออกแบบ">19 : คณะสถาปัตยกรรมศาสตร์ ศิลปะและการออกแบบ</option>
                  <option value="คณะนิติศาสตร์">20 : คณะนิติศาสตร์</option>
                  <option value="คณะมนุษยศาสตร์">21 : คณะมนุษยศาสตร์</option>
                  <option value="คณะบริหารธุรกิจ เศรษฐศาสตร์และการสื่อสาร">22 : คณะบริหารธุรกิจ เศรษฐศาสตร์และการสื่อสาร</option>
                  <option value="คณะสังคมศาสตร์">23 : คณะสังคมศาสตร์</option>
                  <option value="โรงเรียนสาธิตมหาวิทยาลัยนเรศวร">24 : โรงเรียนสาธิตมหาวิทยาลัยนเรศวร</option>
                </select>
                <select required>
                    <option value=''>ชั้นปี</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                </select>
                <input
                  type='text'
                  placeholder='เบอร์'
                  onChange={handleTel}
                  required
                />
                <input
                  type='email'
                  placeholder='อีเมล'
                  required
                />
                <select required>
                  <option value="">ระดับการใช้งาน</option>
                  <option value="ผู้ใช้">ผู้ใช้</option>
                  <option value="ผู้ดูแล">ผู้ดูแล</option>
                </select>
              </div>
              <div className='PFEU-form-footer' id='PFEU-form-footer'></div>
            </form>
          </div>
        </div>
    </div>
  )
}

