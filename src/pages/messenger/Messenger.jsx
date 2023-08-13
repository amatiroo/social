import React from 'react'
import './messenger.css'
import Topbar from '../../components/topbar/Topbar'
import Conversations from '../../components/conversations/Conversations'
import Message from '../../components/message/Message'

export default function Messenger() {
  return (
    <>
    <Topbar/>
    <div className='messenger'>
       <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input className='chatMenuInput' placeholder='Search for friends'/>
          <Conversations/>
          <Conversations/>
          <Conversations/>
          <Conversations/>
        </div>
       </div>
       <div className="chatBox">
       <div className="chatBoxWrapper">
         <div className="chatBoxTop">
          <Message/>
          <Message/>
          <Message own = {true}/>
          <Message/>
          <Message/>
          <Message own = {true}/>
          <Message/>
          <Message/>
          <Message own = {true}/>
          <Message/>
          <Message/>
          <Message own = {true}/>
          <Message/>
          <Message/>
          <Message own = {true}/>
          <Message/>
         </div>
         <div className="chatBoxBottom">
          <textarea className='chatMessageInput' placeholder='Type a Message'></textarea>
          <button className='chatSubmitButton'>Send</button>
         </div>
      </div>
       </div>
       <div className="chatOnline">
       <div className="chatOnlineWrapper">
          Online
      </div>
       </div>
    </div>
    </>
  )
}
