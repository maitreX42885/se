import './DashboardUser.css'

import React, { Suspense, useContext, useEffect, useState } from 'react'
import Firebase from '../../back-end/FirebaseC'
import {onSnapshot, collection} from 'firebase/firestore'
import Loading from '../Loading';
import { ValPopupContext } from '../PopupForm/ValPopup';

const _PopupEditUser = React.lazy(()=> import('../PopupForm/PopupForm'));

function DashboardUser() {

  const allUser = []
  const fb = new Firebase()
	const db = fb.init_firebase()

 

  const {ValPopup, ValPopupAction} = useContext(ValPopupContext)
  const [idProps, setIdProps] = useState(0)
  const [valUser, setValUser] = useState([])
  
  const onChangeSearch = (e)=> {
    const value = e.target.value
    allUser.forEach((nn)=>{
      // console.log(Object.keys(nn))
      if (Object.keys(nn).includes("password") ) {
        delete nn.password
      }
    })

    const newAllUser = allUser.filter((data)=>{
      return Object.keys(data).some(k=>data[k].toLowerCase().includes(value.toLowerCase()))
    })
    
    createTable(newAllUser)
    
  }

  const createTable = (x)=>{
    const loading = document.getElementById('loading-User')
    const tableUser = document.getElementById('table-user-content')
    const trUser = document.querySelectorAll('#tr-user')
    loading.style.display = 'flex'
    if (trUser) {
      trUser.forEach((x)=>{
        x.remove()
      })
    }//

    
    if (x.length > 0) {
      x.forEach((v)=>{
        const tr = document.createElement('tr')
        const tdNum = document.createElement('td')
        const tdName = document.createElement('td')
        const tdFaculty = document.createElement('td')
        const tdClass = document.createElement('td')
        const tdPhone = document.createElement('td')
        const tdEmail = document.createElement('td')
        const tdPermission = document.createElement('td')
        const wrapperDel = document.createElement('td')
        const tdButtonDel = document.createElement('button')
        const tdButtonEdit = document.createElement('button')
  
        tr.id = 'tr-user'
        
        tdNum.innerHTML = v.studentNumber
        tdName.innerHTML = v.name
        tdFaculty.innerHTML = v.faculty
        tdClass.innerHTML = v.class
        tdPhone.innerHTML = v.phone
        tdEmail.innerHTML = v.email
        tdPermission.innerHTML = v.permission
        
        tdButtonDel.innerHTML = "Delete"
        tdButtonDel.value = v.studentNumber
        tdButtonDel.onclick = handleDelete
  
        tdButtonEdit.innerHTML = "Edit"
        tdButtonEdit.onclick = handleEdit
        tdButtonEdit.id = v.studentNumber
  
        wrapperDel.append(tdButtonEdit, tdButtonDel)
  
        tr.append(tdNum, tdName, tdFaculty, tdClass, tdPhone, tdEmail, tdPermission, wrapperDel)
  
        tableUser.append(tr)
        
      })
    }else {
        const tr = document.createElement('tr')
        const tdNum = document.createElement('td')
        const tdName = document.createElement('td')
        const tdFaculty = document.createElement('td')
        const tdClass = document.createElement('td')
        const tdPhone = document.createElement('td')
        const tdEmail = document.createElement('td')
        const tdPermission = document.createElement('td')
        const wrapperDel = document.createElement('td')
       
        tr.id = 'tr-user'
        tdNum.innerHTML = 'ไม่มีรายการ'    
        tdName.innerHTML = '#'
        tdFaculty.innerHTML = '#'
        tdClass.innerHTML = '#'
        tdPhone.innerHTML = '#'
        tdEmail.innerHTML = '#'
        tdPermission.innerHTML = '#'
  
        tr.append(tdNum, tdName, tdFaculty, tdClass, tdPhone, tdEmail, tdPermission, wrapperDel)
  
        tableUser.append(tr)
    }
    loading.style.display = 'none'
  }

  

  onSnapshot(collection(db, 'users'), async (doc)=>{
    allUser.splice(0, allUser.length)
    const trUser = document.querySelectorAll('#tr-user')
    if (trUser) {
      trUser.forEach((x)=>{
        x.remove()
      })
    }//
    await doc.forEach(value => {
        allUser.push(value.data())
    })
    
    createTable(allUser)
  })

  
    
  const handleDeleteAll = () => {
    if (window.confirm("คุณต้องการลบรายชื่อทั้งหมด?")) {
      fb.delete_in_collection_user(db, "users")
    }
  }
  
  const handleEdit = (e) => {
    setIdProps(e.target.id)
    
    const newAllUser = allUser.filter((data)=>{
      return Object.keys(data).some(k=>data[k].toLowerCase().includes(e.target.id.toLowerCase()))
    })
    setValUser(newAllUser)
    ValPopupAction.setVal(1)
  }

  const handleDelete = (e) => {
    if (window.confirm('ต้องการลบรายชื่อนี้?')) {
      fb._delete_(db, "users", e.target.value)
    }
    
  }

  return (
    <div id='d-user'>
      <div className='loading-User' id='loading-User'>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <Suspense fallback={<Loading/>}>
        {(ValPopup===1)?(<_PopupEditUser title={valUser} />):""}
      </Suspense>
      <div className='d-user-header'><h1>สมาชิก</h1></div>
      <div className='d-user-toolbar'>
        <input type='search' placeholder='Search...' onChange={onChangeSearch}/>
        <button type='button' id='deleteAll' onClick={handleDeleteAll}>Delete All</button>
      </div>
      <div id='d-user-content'>
        <table id='table-user-content'>
          <tr>
            <th>รหัสนิสิต</th>
            <th>ชื่อ</th>
            <th>คณะ</th>
            <th>ปี</th>
            <th>เบอร์</th>
            <th>อีเมล</th>
            <th>ระดับ</th>
            <th>Action</th>
          </tr>
          {/* <tr>
            <td>d</td>
            <td>d</td>
            <td>d</td>
            <td>d</td>
            <td>d</td>
            <td>d</td>
            <td>d</td>
            <td><button type='button' onClick={handleDelete}>Delete</button></td>
          </tr> */}
          
          
        </table>
      </div>
    </div>
  )
}

export default DashboardUser