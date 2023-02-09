import React from 'react'
import './css/MenuIndex.css'
import MenuHeader from './MenuHeader'
import MenuSidebar from './MenuSidebar'
import MenuWelcome from './MenuWelcome'

function MenuIndex() {
  return (
    <div className='menu-container'>
        <div className='menu-header'>
            {<MenuHeader />}
        </div>
        <div className='menu-content'>
            {<MenuWelcome />}
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