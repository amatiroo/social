import React from 'react'
import './chatOnline.css'

export default function ChatOnline() {
  return (
    <div className='chatOnline'>
        <div className="chatOnlineFriend">

            <div className="chatOnlineImageContainer">
                <img src="assets/person/3.jpeg" alt="" className="chatOnlineImg" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">John Alex</span>
        </div>
        
    </div>
  )
}
