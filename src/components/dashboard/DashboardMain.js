import { collection, onSnapshot } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Firebase from '../../back-end/FirebaseC'
import { PagecursorContext } from './ValDashboard'
import './DashboardMain.css'
function DashboardMain() {

  const fb = new Firebase()
	const db = fb.init_firebase()
  const {pageCursor, PageCursorAction} = useContext(PagecursorContext)

  onSnapshot(collection(db, 'users'), async (doc)=>{
    const allUser = []
    
    await doc.forEach(value => {
        allUser.push(value.data())
    })
    
    createTableUser(allUser)
  })

  onSnapshot(collection(db, 'tools'), async (doc)=>{
    const allTool = []
    
    await doc.forEach(value => {
        allTool.push(value.data())
    })
    createTableTool(allTool)
  })

  function createTableTool(data) {
    const trUser = document.querySelectorAll('#temp-tool')
    if (trUser) {
      trUser.forEach((x)=>{
        x.remove()
      })
    }//
    
    if (data.length != 0) {
      data.forEach((val)=>{
        // console.log(val.name)
        const body = document.getElementById('dashboard-content-footer-left-content')
        const img = document.createElement('img')
        const div = document.createElement('div')

        img.src = val.url

        div.append(img)
        div.id = 'temp-tool'
        body.append(div)
      })
    }else {
      const body = document.getElementById('dashboard-content-footer-left-content')
      const div = document.createElement('div')

      div.innerHTML = 'ไม่มีรายการ'
      div.id = 'temp-tool'

      body.append(div)
    }
  }

  function createTableUser(data) {
    const trUser = document.querySelectorAll('#temp-user')
    
    if (trUser) {
      trUser.forEach((x)=>{
        x.remove()
      })
    }//

    if (data.length != 0) {
      data.forEach((val)=>{
        // console.log(val.name)
      const body = document.getElementById('dashboard-content-footer-right-content')
      const div = document.createElement('div')

      div.innerHTML = `${val.name}  |  ปี${val.class}`
      div.id = 'temp-user'

      body.append(div)
      })
    }else {
      const body = document.getElementById('dashboard-content-footer-right-content')
      const div = document.createElement('div')

      div.innerHTML = 'ไม่มีสมาชิก'
      div.id = 'temp-user'

      body.append(div)
    }
  }

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
                      <button type='button' onClick={()=>PageCursorAction.setPage(2)}>See all</button>
                      <FiArrowRight/>
                    </div>
                  </div>
                  <div className='dashboard-content-footer-left-content' id='dashboard-content-footer-left-content'>
                    
                  </div>
                </div>
                <div className='dashboard-content-footer-right'>
                  <div className='dashboard-content-footer-right-head'>
                    <h3>สมาชิก</h3>
                      <div>
                        <button type='button' onClick={()=>PageCursorAction.setPage(1)}>See all</button>
                        <FiArrowRight/>
                      </div>
                  </div>
                  <div className='dashboard-content-footer-right-content' id='dashboard-content-footer-right-content'>
                    
                  </div>
                </div>
              </div>
    </div>
  )
}

export default DashboardMain