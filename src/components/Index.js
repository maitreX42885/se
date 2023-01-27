import React, { useState } from 'react'
import Register from './Register'
import Login from './Login'


const Index = ({status}) => {
    const [active, setActive] = useState(status)
    const aa = ()=>{alert(active)}
  return (
    <div>
        <button onClick={aa}>a</button>
        {(active) === ('register') ? <Register /> : <Login />}
    </div>
  )
}

export default Index