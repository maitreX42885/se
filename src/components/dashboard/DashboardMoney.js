import './DashboardMoney.css'

import React from 'react'
import Firebase from '../../back-end/FirebaseC'
import { async } from '@firebase/util'

function DashboardMoney() {
  const Fb = new Firebase()
  const db = Fb.init_firebase()

  const handdleClike = async (e)=>{
    let val = e.target.value
    
  }
  return (
    <div>
      <button type='button' value='users' onClick={handdleClike}>Click</button>
    </div>
  )
}

export default DashboardMoney