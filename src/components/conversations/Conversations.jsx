import React, { useEffect, useState } from 'react'
import './conversations.css'
import axios from 'axios'

export default function Conversations({conversation,currentUser}) {

  const [user,setUser] = useState(null);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {

    const friendId = conversation.members.find((m) => m !== currentUser._id)

    const getUser = async () => {

      try{
        const res = await axios("/users?userId="+friendId)

        setUser(res.data);
      }catch(err){
        console.log(err)
      }
    
    }
    getUser()
  },[currentUser,conversation])

  return (
    <div className='conversation'>
        <img src={user?.profilePicture ? user?.profilePicture : PF + "person/oswald.jpg" } alt="" className="conversationImg" />
        <span className="conversationName">{user?.username}</span>
    </div>
  )
}
