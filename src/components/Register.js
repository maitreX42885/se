import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import './Register.css';


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

    const onSubmit = (e) => {
        const all = []
        e.preventDefault();
        for (let i of e.target) {
            all.push(i.value)
        }
        console.log(all.slice(0, (all.length - 1)))
        e.target.reset()
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
                <form id='form-register' className='form-register' onSubmit={onSubmit}>
                    <input 
                        type='text'
                        placeholder='รหัสนิสิต*'
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
                            <option value="102">0 : บัณฑิตวิทยาลัย</option>
                            <option value="120">1 : วิทยาลัยพลังงานทดแทนและสมาร์ตกริดเทคโนโลยี</option>
                            <option value="121">2 : สถานการศึกษาต่อเนื่อง</option>
                            <option value="123">3 : คณะโลจิสติกส์และดิจิทัลซัพพลายเชน</option>
                            <option value="124">4 : วิทยาลัยเพื่อการค้นคว้าระดับรากฐาน</option>
                            <option value="126">5 : สถานพัฒนาวิชาการด้านภาษา</option>
                            <option value="127">6 : วิทยาลัยการจัดการระบบสุขภาพ</option>
                            <option value="196">7 : วิทยาลัยนานาชาติ</option>
                            <option value="203">8 : คณะเกษตรศาสตร์ ทรัพยากรธรรมชาติและสิ่งแวดล้อม</option>
                            <option value="204">9 : คณะเภสัชศาสตร์</option>
                            <option value="206">10 : คณะวิทยาศาสตร์</option>
                            <option value="207">11 : คณะวิศวกรรมศาสตร์</option>
                            <option value="208">12 : คณะศึกษาศาสตร์</option>
                            <option value="209">13 : คณะแพทยศาสตร์</option>
                            <option value="210">14 : คณะสาธารณสุขศาสตร์</option>
                            <option value="211">15 : คณะวิทยาศาสตร์การแพทย์</option>
                            <option value="212">16 : คณะพยาบาลศาสตร์</option>
                            <option value="213">17 : คณะทันตแพทยศาสตร์</option>
                            <option value="214">18 : คณะสหเวชศาสตร์</option>
                            <option value="215">19 : คณะสถาปัตยกรรมศาสตร์ ศิลปะและการออกแบบ</option>
                            <option value="216">20 : คณะนิติศาสตร์</option>
                            <option value="217">21 : คณะมนุษยศาสตร์</option>
                            <option value="218">22 : คณะบริหารธุรกิจ เศรษฐศาสตร์และการสื่อสาร</option>
                            <option value="219">23 : คณะสังคมศาสตร์</option>
                            <option value="292">24 : โรงเรียนสาธิตมหาวิทยาลัยนเรศวร</option>
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