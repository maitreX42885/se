import './DashBoardTool.css'

import React, { useContext, useState } from 'react'
import { BiBox } from 'react-icons/bi'
import Firebase from '../../back-end/FirebaseC'
import { collection, onSnapshot } from 'firebase/firestore'
import { ValPopupContext } from '../PopupForm/ValPopup'

const _PopupEditTool = React.lazy(()=> import('../PopupForm/PopupTool'));


function DashboardTool() {

  const Fb = new Firebase()
  const db = Fb.init_firebase()
  const allTool = []

  const {ValPopup, ValPopupAction} = useContext(ValPopupContext)
  const [idTool, setIdTool] = useState(0)

  onSnapshot(collection(db, 'tools'), async (doc)=>{
    allTool.splice(0, allTool.length)
    
    const trUser = document.querySelectorAll('#tr-tool')
    if (trUser) {
      trUser.forEach((x)=>{
        x.remove()
      })
    }//
    
    await doc.forEach(value => {
        allTool.push(value.data())
    })
   
    if (allTool.length < 1) {
      createTool(allTool, false)
    }else {
      createTool(allTool, true)
    }
    
  })

  function createTool(x , check) {
    const loading = document.getElementById('loading-Tool')
    const body = document.getElementById('table-DT')
    const trTool = document.querySelectorAll('#tr-tool')
    loading.style.display = 'flex'
    if (trTool) {
      trTool.forEach(val => {
        val.remove()
      })
    }

    if (allTool.length != 0) {
      x.forEach((data)=>{
        const tr = document.createElement('tr')
        tr.id = 'tr-tool'
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const td4 = document.createElement('td')
        const td5 = document.createElement('td')
        const td6 = document.createElement('td')
        const btnEdit = document.createElement('button')
        const btnDelete = document.createElement('button')
        
  
        td1.innerHTML = data.id
        td2.innerHTML = data.title
        td3.innerHTML = data.subTitle
        td4.innerHTML = data.count
        td5.innerHTML = data.url
  
        if (check) {
          btnEdit.innerHTML = 'Edit'
          btnEdit.id = data.id
          btnEdit.onclick = handleEdit
          btnDelete.innerHTML = 'Delete'
          btnDelete.id = data.id
          btnDelete.onclick = handleDelete
        }else {
          btnEdit.innerHTML = '#'
          btnEdit.id = 'btnEmpty'
          btnDelete.innerHTML = '#'
          btnDelete.id = 'btnEmpty'
        }
       
  
        td6.append(btnEdit, btnDelete)
        tr.append(td1, td2, td3, td4, td5, td6)
        body.append(tr)
      })
    }else {
      const tr = document.createElement('tr')
      tr.id = 'tr-tool'
      const td1 = document.createElement('td')
      const td2 = document.createElement('td')
      const td3 = document.createElement('td')
      const td4 = document.createElement('td')
      const td5 = document.createElement('td')
      const td6 = document.createElement('td')
      const btnEdit = document.createElement('button')
      const btnDelete = document.createElement('button')
      const div = document.createElement('div')

      td1.innerHTML = '#'
      td2.innerHTML = '#'
      td3.innerHTML = 'ไม่มีรายการ'
      td4.innerHTML = '#'
      td5.innerHTML = '#'

      if (check) {
        btnEdit.innerHTML = 'Edit'
        btnEdit.onclick = handleEdit
        btnDelete.innerHTML = 'Delete'
        btnDelete.onclick = handleDelete
      }else {
        btnEdit.innerHTML = '#'
        btnEdit.id = 'btnEmpty'
        btnDelete.innerHTML = '#'
        btnDelete.id = 'btnEmpty'
      }


      td6.append(btnEdit, btnDelete)
      tr.append(td1, td2, td3, td4, td5, td6)
      body.append(tr)
      
    }
    loading.style.display = 'none'
  }

  const onChange = (e)=> {
    let value = e.target.value
    
    const newAllTool = allTool.filter((data)=>{
      return Object.keys(data).some(k=>data[k].toLowerCase().includes(value.toLowerCase()))
    })
    console.log(newAllTool)
    if (newAllTool.length == 0) {
      const emptyData = {
        id:'ไม่พบ',
        name:'#',
        title:'#',
        subTitle:'#',
        count:'#',
        url:'#',
      }
      
      createTool([emptyData], false)
    }else {
      createTool(newAllTool, true)
    }
    
  }
  
  const handleDelete = (e)=> {
    if (window.confirm('ต้องการลบอุปกรณ์นี้?')) {
      Fb._delete_(db, "tools", e.target.id)
    }
  }
  const handleEdit = (e) => {
    setIdTool(e.target.id)
    ValPopupAction.setVal(2)
  }

  const handleDeleteAll = () => {
    
    if (window.confirm('ต้องการลบอุปกรณ์ทั้งหมดนี้?')) {
      Fb.delete_in_collection_tool(db, "tools")
    }
  }

  return (
    <div className='DT-container'>
      <div className='loading-Tool' id='loading-Tool'>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div> 
      {(ValPopup===2)?(<_PopupEditTool title={idTool}/>) : ""}
      <div className='DT-header'>
        <h2>อุปกรณ์</h2>
        <h2><BiBox/></h2>
      </div> 
      <div className='DT-toolbar'>
        <input 
          type='search'
          placeholder='Search...'
          onChange={onChange}
        />
        <button type='button' onClick={handleDeleteAll}>Delete All</button>
      </div>
      <div className='DT-content'>
        <table id='table-DT'>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Count</th>
            <th>Url</th>
            <th>Action</th>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default DashboardTool