import React from 'react';
import "./index.css";
import { Link, NavLink } from 'react-router-dom';
const isActive = ({isActive}) => (isActive ? "active-link" : "")
const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/">Home</Link>
        <NavLink to={{
            pathname : "/profile",
            hash : "test",
            search:"currentPage=1&orderBy=hot"
        }}
        replace
        className={isActive}
        >Profile
        </NavLink>
        <NavLink  to="/discuss" className={isActive}>Discuss</NavLink>
        <NavLink to={{
          pathname  : "/problemset/shell",
          search : "page=1"
        }} >
          Problems
        </NavLink>
    </nav>
  )
}

export default Navbar
