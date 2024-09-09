import React from 'react'
import Logo from '../../Assets/Netflix.png'
import './navbar.css'
import { IoNotifications } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { NavLink } from 'react-router-dom';





const NavBar = () => {
  return (
    <div className=' Navbar '>
     <NavLink to="" >   <img src={Logo} alt='' className='logo'/></NavLink>
        <div className='navLinks'>

        <NavLink  to='/home'
           className={({isActive})=>
            `${isActive?"text-red-600":"text-white"}`
           }
        >
          Home
          </NavLink>

        <NavLink to='/tvShows'
         className={({isActive})=>
          `${isActive?"text-red-600":"text-white"}`
         }
        >TV Shows</NavLink>
        <NavLink to='movies'
          className={({isActive})=>
            `${isActive?"text-red-600":"text-white"}`
           }
         >Movies</NavLink>
        <NavLink to='/popular'
          className={({isActive})=>
            `${isActive?"text-red-600":"text-white"}`
           }
         >New & Popular</NavLink>
        <NavLink to='/myList'
          className={({isActive})=>
            `${isActive?"text-red-600":"text-white"}`
           }
         >My List</NavLink>
        <NavLink to='/languuage'
          className={({isActive})=>
            `${isActive?"text-red-600":"text-white"}`
           }
         >Browse My Languages</NavLink>
        </div>
        <div className='navrightIcons'>
        <CiSearch />
        <NavLink href='###' className='children'>Children</NavLink>
        <IoNotifications />
        <CiUser />
        </div>
    </div>
  )
}

export default NavBar;