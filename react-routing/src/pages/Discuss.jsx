import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import "./discuss.css";


const isActive = ({isActive})=>(isActive ? "active-sub-link" : "");

const Discuss = () => {
    const navigate = useNavigate();
    const goToProfile = async () => {
         await new Promise ((r)=> setTimeout(r, 2000)) 
          navigate("/profile")
    }
    //this how we can do dynamic navigation
    //delta = 0, +1, -1
    //navigat(0) does page refresh
    //navigat(-1) goes to back page
    //navigat(+1) goes to front page 

  return (
    <>
    <nav className='sub-navbar'>
        <NavLink to="/discuss/interview-experience" className={isActive}>
        Interview experience
        </NavLink>
        <NavLink className={isActive} to="/discuss/interview-questions">
        Interview questions
        </NavLink>
    </nav>
    <button onClick={goToProfile}>Navtigate to profile</button>
    <Outlet/>
    </>
  )
}

export default Discuss;
