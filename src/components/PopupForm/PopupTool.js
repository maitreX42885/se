import './PopupTool.css'

import React, { useContext, useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { ValPopupContext } from './ValPopup'
import Firebase from '../../back-end/FirebaseC'

function PopupTool(props) {

    const FB = new Firebase()
    const db = FB.init_firebase()

    const {ValPopup, ValPopupAction} = useContext(ValPopupContext)

    useEffect(()=>{
        createFormTool()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title: e.target[0].value,
            subTitle: e.target[1].value,
            count: e.target[2].value,
            url: e.target[3].value
        }
        await FB._editTool_(db, props.title, data)
        ValPopupAction.setVal(0)
    }
    function createFormTool() {
        const h2 = document.createElement('h2')
        const body = document.getElementById('pt-content-title')
        h2.innerHTML = `Edit-ID : ${props.title}`
        body.append(h2)
    }

  return (
    <div className='popup-tool'>
        <div className='pt-form'>
            <div className='pt-header'>
                <button type='button' onClick={()=>ValPopupAction.setVal(0)}><AiOutlineClose/></button>
            </div>
            <div className='pt-content'>
                <div className='pt-content-title' id='pt-content-title'></div>
                <form id='pt-content-form' onSubmit={onSubmit}>
                    
                    <input
                        type='text'
                        placeholder='Title*'
                        required
                    />
                    <textarea
                        type='text'
                        placeholder='Description*'
                        required
                    />
                    <input
                        type='number'
                        placeholder='Count*'
                        required
                    />
                    <input
                        type='text'
                        placeholder='Url*'
                        required
                    />
                    <div className='pt-content-form-footer'>
                        <button type='submit'>บันทึก</button>
                        <button type='reset'>เคลียร์</button>
                    </div>

                </form>
            </div>
        </div>
        
    </div>
  )
}

export default PopupTool