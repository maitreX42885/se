import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import Firebase from '../back-end/FirebaseC';
import './Register.css';
import Reg_icon from '../asset/register/4315445.png'

const Register = () => {


    const [tel, setTel] = useState('')
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

    const handleTel = (e)=> {
        let value = e.target.value
        value = value.replace(/\D/g, ""); // remove non-numeric characters
        value = value.substring(0, 10); // limit to 10 digits
        value = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"); // add formatting
        e.target.value = value
    }

    const onSubmit = async (e) => {
        const all = []
        e.preventDefault();
        for (let i of e.target) {
            all.push(i.value)
        }
        // console.log(all)
        console.log(all.slice(0, (all.length - 1)))

        

        Fb.add_data(db, {
            number_student:all[0],
            password:all[1]
        })

        e.target.reset()
    }
    
    const handleNumStudent = (e) => {
        let num = e.target.value
        num = num.substring(0, 8)
        e.target.value = num
    }

  return (
    <div className='register-container'>
        <div className='l-register'>
            <div className='wrapper-l'>
                <img src='https://images.unsplash.com/photo-1426927308491-6380b6a9936f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'/>
            </div>
        </div>
        <div className='r-register'>
            <div className='login-link'>
                Already a <t/>
                <a href={'/'}>
                    member?
                </a>
            </div>
            <h2>Register</h2>
            <div className='wrapper-rr' >
                <div className='register-success'>
                    <div className='wrapper-model-register'>
                        <div className='m-register-src'>
                            <img
                                src={Reg_icon}
                            />
                        </div>
                        <div className='m-register-content'>
                            <h5>Sign In Success</h5>
                            <h5>Thank for register</h5>
                        </div>
                    </div>
                </div>
                <form id='form-register' className='form-register' onSubmit={onSubmit}>
                    <p id='register-check'>รหัสนิสิตนี้มีบัญชีอยู่แล้ว</p>
                    <input 
                        id='num_stu'
                        type='text'
                        placeholder='รหัสนิสิต*'
                        onChange={handleNumStudent}
                        required
                    />
                    <input 
                        type='password'
                        placeholder='Password*'
                        required
                    />
                    <input 
                        type='text'
                        placeholder='Full name*'
                    />
                    <input 
                        type='email'
                        placeholder='Email*'
                        required
                    />
                    <input 
                        type='tel'
                        onChange={handleTel}
                        
                        placeholder='Phone*'
                        required
                    />
                    
                    <div className='Group-select'>
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
                    </div>
                    <div className='form-register-footer'>
                        <input 
                            type='submit'
                            value='Sign Up'
                        />
                    </div>
                    
                </form>
            </div>
            <div className='nightMode'>
                <button onClick={handleNightMode} id='btnNightMode'>{(localStorage.getItem('theme') === 'true') ? (<FiMoon />) : (<FiSun />)}</button>
            </div>
        </div>
    </div>
  );
}

export default Register;