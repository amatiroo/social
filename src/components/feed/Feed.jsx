import React from './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react';
import axios from "axios"


export default function Feed({username}) {
  const [posts,setPosts] = useState([])
  

  useEffect(()=>{
  const fetchPosts = async () =>{
    try{
      const res = username
      ? await axios.get("/posts/profile/"+username)
      : await axios.get("posts/timeline/646e66ccf4783e22b092e243");
      setPosts(res.data)
    } catch (error) {
      console.error(error);
    }
    
  };
  fetchPosts(); 
  },[username])
  return (
    <div className='feed'>
      
      <div className="feedWrapper">
        <Share/>
        

        {posts.map((p)=>(
          <Post key={p._id} post={p}/>
        ))}
       
        

      </div>
    </div>
  )
}
