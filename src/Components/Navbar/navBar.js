import React from 'react'
import Logo from '../../Assets/Netflix.png'
import './navbar.css'
import { IoNotifications } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
const navBar = () => {
  return (
    <div className=' Navbar '>
        <img src={Logo} alt='' className='logo'/>
        <div className='navLinks'>
        <a href='/home'>Home</a>
        <a href='/tvShows'>TV Shows</a>
        <a href='movies'>Movies</a>
        <a href='popular'>New & Popular</a>
        <a href='myList'>My List</a>
        <a href='languuage'>Browse My Languages</a>
        </div>
        <div className='navrightIcons'>
        <CiSearch />
        <a href='###' className='children'>Children</a>
        <IoNotifications />
        <CiUser />
        </div>
    </div>
  )
}

export default navBar