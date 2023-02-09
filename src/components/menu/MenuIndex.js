import React, { Suspense, useContext, useEffect } from 'react'
import { AuthContext } from '../Auth'
import { PagecursorContext } from '../dashboard/ValDashboard'
import './css/MenuIndex.css'
import MenuHeader from './MenuHeader'
import MenuSidebar from './MenuSidebar'
import MenuWelcome from './MenuWelcome'


function MenuIndex() {

  const {currentUser, currentUserAction} = useContext(AuthContext)
  const {PageCursor, PageCursorAction} = useContext(PagecursorContext)

  useEffect(()=>{
    PageCursorAction.setPage(0)
    if (currentUser != null) {
      
    }
  }, [currentUser])

  return (
    <div className='menu-container'>
        <div className='menu-header'>
            {<MenuHeader />}
        </div>
        <div className='menu-content'>
            
            {<MenuWelcome/>}
            <div className='menu-sidebar'>
                {/* {<MenuSidebar />} */}
            </div>
            <div className='menu-wrapper-content'>
                
            </div>
        </div>
    </div>
  )
}

export default MenuIndex