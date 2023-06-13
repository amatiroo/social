import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import React from './profile.css'
import { useState , useEffect } from 'react'
import axios from "axios"

export default function Profile() {
  const PF =  process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState({})

  useEffect(()=>{
    const fetchUser = async () =>{
      try{
        const res = await axios.get(`/users?username=Oswald`);
        setUser(res.data)
      } catch (error) {
        console.error(error);
      }
      
    };
    fetchUser();
},[]) 

  return (
    <>
        <Topbar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
            <div className="profileCover">

                
            <img src={user.coverPicture || PF+"post/1.jpeg"} alt="" className="coverPicture" />   
            <img src={user.profilePicture || PF+"person/oswald.jpg"} alt="" className="profileUserImg" /> 

            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>{user.username}</h4>
                <span className='profileInfoDesc'>{user.desc}</span>
            </div>
            </div>
            <div className="profileRightBottom">
            <Feed username="Oswald"/>
        <Rightbar user={user}/>
            </div>
        
        </div>
        
        </div>
        
        </>
  )
}
