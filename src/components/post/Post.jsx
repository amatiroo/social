import React from './post.css'
import { MoreVert } from '@mui/icons-material'
import axios from "axios"
import { useState , useEffect } from 'react'
import {format} from "timeago.js"
import {Link} from "react-router-dom"

export default function Post({post}) {
    
    const [like,setLike] = useState(post.likes.length)
    const [isLiked,setIsLiked] = useState(false)
    const [user,setUser] = useState({})

    const PF =  process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(()=>{
        const fetchUser = async () =>{
          try{
            const res = await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data)
          } catch (error) {
            console.error(error);
          }
          
        };
        fetchUser();
    },[post.userId])   


    const likeHandler =()=>{
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                    <img src={user.profilePicture || PF+"person/oswald.jpg"} alt="" className="postProfileImg" />
                    </Link>
                    
                    <span className="postUserName">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={PF+post.img} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img  className='likeIcon' src={`${PF}like.png`}  onClick={likeHandler} alt="" />
                    <img className='likeIcon' src={`${PF}heart.png`}  onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people liked it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
