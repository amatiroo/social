import React, { useContext, useEffect, useState } from 'react'
import './messenger.css'
import Topbar from '../../components/topbar/Topbar'
import Conversations from '../../components/conversations/Conversations'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

export default function Messenger() {

  const [conversation,setConversation] = useState([]);
  const [currentChat,setCurrentChat] = useState(null);
  const [messages,setMessages] = useState([]);

  const {user} = useContext(AuthContext);

  useEffect(()=>{

    const getConversation = async () =>{
      try {
        const res = await axios.get("/conversation/"+user._id)
        setConversation(res.data);
      }catch(err) {
        console.log(err)
      }
      
    }
    getConversation();
  },[user._id])


  useEffect(()=>{
      const getMessages = async () => {

        try{

          const res = await axios.get("/message/"+currentChat?._id)
          setMessages(res.data)
          console.log(res.data)
        }catch(err){
          console.log(err)
        }
      }

      getMessages();
  },[currentChat])


  return (
    <>
    <Topbar/>
    <div className='messenger'>
       <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input className='chatMenuInput' placeholder='Search for friends'/>
          {conversation.map(c=>(
            <div onClick={() => setCurrentChat(c)}>
            <Conversations conversation={c} currentUser = {user}/>
            </div>
          ))}
         
         
        </div>
       </div>
       <div className="chatBox">
       <div className="chatBoxWrapper">

        {
          currentChat ? 
        <>
         <div className="chatBoxTop">

         {messages.map((m) => (
                    <div >
                      <Message message={m} own={m.sender === user._id} />
                    </div>
                  ))}
          
          
         </div>
         <div className="chatBoxBottom">
          <textarea className='chatMessageInput' placeholder='Type a Message'></textarea>
          <button className='chatSubmitButton'>Send</button>
         </div></> : <span className='noConversationText'>Open a conversation to start a chat</span>   }
      </div>
       </div>
       <div className="chatOnline">
       <div className="chatOnlineWrapper">
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
          <ChatOnline/>
      </div>
       </div>
    </div>
    </>
  )
}
