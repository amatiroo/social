import React from 'react'
import './message.css'

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
            <img src="assets/person/2.jpeg" alt="" className="messageImg" />
            <p className='messageText'>Hello , How are you ?</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
        
    </div>
  )
}
