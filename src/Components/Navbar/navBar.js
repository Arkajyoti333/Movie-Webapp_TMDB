import React from 'react'
import Logo from '../../Assets/Netflix.png'
import './navbar.css'
import { IoNotifications } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const navBar = () => {
  return (
    <div className='Navbar'>
        <img src={Logo} alt='' className='logo'/>
        <div className='navLinks'>
        <a href='https://www.netflix.com/browse'>Home</a>
        <a href='https://www.netflix.com/browse'>TV Shows</a>
        <a href='https://www.netflix.com/browse'>Movies</a>
        <a href='https://www.netflix.com/browse'>New & Popular</a>
        <a href='https://www.netflix.com/browse'>My List</a>
        <a href='https://www.netflix.com/browse'>Browse My Languages</a>
        </div>
        <div className='navrightIcons'>
        <CiSearch />
        <a href='https://www.netflix.com/browse' className='children'>Children</a>
        <IoNotifications />
        <CiUser />
        </div>
    </div>
  )
}

export default navBar