import React, { startTransition, Suspense, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Auth';
import './Dashboard.css'
import { BiArrowBack, BiBox, BiHomeAlt, BiUser, BiUserPlus } from "react-icons/bi";
import { FiArrowRight, FiBox, FiMoon, FiSun } from "react-icons/fi";
import { FaCoins, IconName } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading'

const DashboardUser = React.lazy(()=> import('./DashboardUser'));
const DashboardMain = React.lazy(()=> import('./DashboardMain'));
const DashboardTool = React.lazy(()=> import('./DashboardTool'));
const DashboardMoney = React.lazy(()=> import('./DashboardMoney'));
const DashboardAddUser = React.lazy(()=> import('./DashboardAddUser'));
const DashboardAddTool = React.lazy(()=> import('./DashboardAddTool'));



function DashBoard() {


	const [btnNightMode, setBtnNightMode] = useState('')
	const navigate = useNavigate();
    const {currentUser, currentUserAction} = useContext(AuthContext)
    const [pageCursor, setPageCursor] = useState(0)


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
                <div onClick={()=>setPageCursor(5)}><BiHomeAlt/>| หน้าหลัก</div>
                <div onClick={()=>setPageCursor(1)}><BiUser/>| สมาชิก</div>
                <div onClick={()=>setPageCursor(2)}><BiBox/>| อุปกรณ์</div>
                <div onClick={()=>setPageCursor(3)}><FaCoins/>| การเงิน</div>
                <div onClick={()=>setPageCursor(0)}><BiArrowBack/>| กลับ</div>
              </div>
              <div className='dashboard-aside-items'>
                <h4>Other</h4>
                <div onClick={()=>setPageCursor(6)}><BiUserPlus/>| เพื่มสมาชิก</div>
                <div onClick={()=>setPageCursor(7)}><FiBox/>| เพื่มอุปกรณ์</div>
                <div onClick={()=>setPageCursor(8)}>3</div>
                <div onClick={()=>setPageCursor(9)}>4</div>
                <div onClick={()=>setPageCursor(10)}>5</div>
              </div>
            </div>
          </div>
          <div className='dashboard-content' id='dashboard-content'>
		  	
		  	<Suspense fallback={<Loading />}>
			  { (pageCursor===1) ? (<DashboardUser />)
			  : (pageCursor===0) ? (<DashboardMain />) 
			  : (pageCursor===2) ? (<DashboardTool />) 
			  : (pageCursor===3) ? (<DashboardMoney />) 
			  : (pageCursor===5) ? (navigate('/')) 
			  : (pageCursor===6) ? (<DashboardAddUser />) 
			  : (pageCursor===7) ? (<DashboardAddTool />)
			  : ''}
			</Suspense>
          </div>
        </div>
    </div>
  );
}

export default DashBoard;