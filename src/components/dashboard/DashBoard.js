import React, { startTransition, Suspense, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth';
import './Dashboard.css'
import { BiArrowBack, BiBox, BiHistory, BiHomeAlt, BiLogOut, BiUser, BiUserPlus } from "react-icons/bi";
import { FiArrowRight, FiBox, FiMoon, FiSun } from "react-icons/fi";
import { FaCoins, IconName } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading'
import { PagecursorContext } from './ValDashboard';
import Firebase from '../../back-end/FirebaseC';
import { onSnapshot } from 'firebase/firestore';


const DashboardUser = React.lazy(()=> import('./DashboardUser'));
const DashboardMain = React.lazy(()=> import('./DashboardMain'));
const DashboardTool = React.lazy(()=> import('./DashboardTool'));
const DashboardMoney = React.lazy(()=> import('./DashboardMoney'));
const DashboardAddUser = React.lazy(()=> import('./DashboardAddUser'));
const DashboardAddTool = React.lazy(()=> import('./DashboardAddTool'));
const DashboardLogTool = React.lazy(()=> import('./DashboardLogTool'));



function DashBoard() {

	const fb = new Firebase()
	const db = fb.init_firebase()

  


	const {PageCursor, PageCursorAction} = useContext(PagecursorContext)

	const [btnNightMode, setBtnNightMode] = useState('')
	const navigate = useNavigate();
  const {currentUser, currentUserAction} = useContext(AuthContext)



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

  const handleClick = (e)=> {
    let num = parseInt(e.target.id)
    // let id = e.target.id
    // const div = document.getElementById(id)
    // div.style.backgroundColor = '#656565'
    // div.style.color = '#fff
    PageCursorAction.setPage(num)
  }

  return (
    <div>
      <button id='btnNightMode' onClick={handleNightMode}>{(localStorage.getItem('theme') === 'true') ? (<FiMoon />) : (<FiSun />)}</button>
        <div className='dashboard-container'>
          <div className='dashboard-aside'>
            <div className='dashboard-aside-wrapper'>
              <div className='dashboard-aside-header'>
                <h2>DashBoard</h2>
              </div>
              <div className='dashboard-aside-items'>
                <h4>Quick Acess</h4>
                <div id='5' onClick={handleClick}><BiHomeAlt/>| หน้าหลัก</div>
                <div id='1' onClick={handleClick}><BiUser/>| สมาชิก</div>
                <div id='2' onClick={handleClick}><BiBox/>| อุปกรณ์</div>
                <div id='3' onClick={handleClick}><FaCoins/>| การเงิน</div>
                <div id='0' onClick={handleClick}><BiArrowBack/>| กลับ</div>
              </div>
              <div className='dashboard-aside-items'>
                <h4>Other</h4>
                <div id='6' onClick={handleClick}><BiUserPlus/>| เพิ่มสมาชิก</div>
                <div id='7' onClick={handleClick}><FiBox/>| เพิ่มอุปกรณ์</div>
                <div id='99' onClick={handleClick}><BiLogOut/>| ออกจากระบบ</div>
                
              </div>
              <div className='dashboard-aside-items'>
                <h4>History</h4>
                <div id='8' onClick={handleClick}><BiHistory/>| ประวัติการยืม-คืน</div>
                <div id='9' onClick={handleClick}><BiHistory/>| ประวัติการเข้าสู่ระบบ</div>
                <div id='10' onClick={handleClick}><BiHistory/>| ประวัติการเงิน</div>
              </div>
            </div>
          </div>
          <div className='dashboard-content' id='dashboard-content'>
            <Suspense fallback={<Loading />}>
              { (PageCursor===1) ? (<DashboardUser />)
              : (PageCursor===0) ? (<DashboardMain />) 
              : (PageCursor===2) ? (<DashboardTool />) 
              : (PageCursor===3) ? (<DashboardMoney />) 
              : (PageCursor===5) ? (navigate('/')) 
              : (PageCursor===6) ? (<DashboardAddUser />) 
              : (PageCursor===7) ? (<DashboardAddTool />)
              : (PageCursor===8) ? (<DashboardLogTool />)
              : ''}
            </Suspense>
          </div>
        </div>
    </div>
  );
}

export default DashBoard;