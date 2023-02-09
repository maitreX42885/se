import './DashboardAddUser.css'
import React from 'react'
import LogoAdd from './add-circle-svgrepo-com.svg'
import Firebase from '../../back-end/FirebaseC'

function DashboardAddUser() {

  const Fb = new Firebase()
  const db = Fb.init_firebase()

  

  const handleNumStudent = (e) => {
    let num = e.target.value
    num = num.substring(0, 8)
    e.target.value = num
  }

  const handleTel = (e)=> {
    let value = e.target.value
    value = value.replace(/\D/g, ""); // remove non-numeric characters
    value = value.substring(0, 10); // limit to 10 digits
    value = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"); // add formatting
    e.target.value = value
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const loadingDAU = document.getElementById('loading-DAU')
    loadingDAU.style.display = 'flex'
    const form = document.getElementById('form-DAUC')
    const p = document.getElementById('register-check')
    const inputAdd = document.getElementById('num-add-user')

    const all = []
    for (let i of e.target) {
        all.push(i.value)
    }
    const all2 = all.slice(0, (all.length - 1))
    // console.log(all2)
    

    const backRegister = await Fb._add_user_(db, all[0],{
        studentNumber:all2[0],
        name:all2[1],
        password:all2[2],
        email:all2[3],
        phone:all2[4],
        faculty:all2[5],
        class:all2[6],
        permission:all2[7]
    })//ff

    if (backRegister === 'success') {
      inputAdd.style.border = 'transparent'
      inputAdd.style.borderbottom = '1px solid #000'
      alert('เพิ่มสมาชิกสำเร็จ')   
      form.reset()
    }else {
      p.style.display = 'block'
      
      // inputAdd.style.backgroundColor = '#fe0000'
      inputAdd.style.border = '1px solid #fe0000'
      inputAdd.style.animation = 'shakeee 100ms linear';
      setTimeout(()=>{
        inputAdd.style.animation = undefined;
      }, 210)
    }
    loadingDAU.style.display = 'none'
    
  }

  return (
    <div className='d-add-user'>
      <div className='loading-DAU' id='loading-DAU'>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <div className='d-add-user-header'>
        <h2>เพิ่มสมาชิก</h2>
        <img 
          src={LogoAdd}
        />
      </div>
      <div className='d-add-user-content'>
        <div className='wrapper-DAUC'>
          <form id='form-DAUC' onSubmit={onSubmit}>
            <p id='register-check'>รหัสนิสิตนี้มีบัญชีอยู่แล้ว</p>
            <input 
              id='num-add-user'
              type='text'
              placeholder='รหัสนิสิต*'
              onChange={handleNumStudent}
              required
            />
            <input 
              type='text'
              placeholder='ชื่อ*'
              required
            />
            <input 
              type='text'
              placeholder='รหัสผ่าน*'
              required
            />
            
            <input 
              type='email'
              placeholder='อีเมล*'
              required
            />
            <input 
              type='tel'
              placeholder='เบอร์*'
              onChange={handleTel}
              required
            />
           
            <div className='Group-select-DAU'>
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
              <select required>
                <option value=''>ระดับการใช้งาน</option>
                <option value='ผู้ใช้'>ผู้ใช้</option>
                <option value='ผู้ดูแล'>ผู้ดูแล</option>
            </select>
            </div>
            <div className='DAU-footer'>
              <button type='submit'>บันทึก</button>
              <button type='button' onClick={()=>{document.getElementById('form-DAUC').reset()}}>เคลียร์</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DashboardAddUser