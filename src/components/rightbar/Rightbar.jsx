import React from './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {

    const HomeRightBar = () =>{
        return(

            <>
            <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u}/>
                    ))}
                    
                </ul>
            </>
        )
    }

    const ProfileRightBar = () =>{
        return(
            <>
            <h4 className='rightbarTitle'>User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Arlington</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">San Jose</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>

            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <ProfileRightBar/>
            </div>
        </div>
    );
}


