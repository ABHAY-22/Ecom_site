import React from 'react'
import {Link} from "react-router-dom";
import icon from "./images/yoga.jpg"
import refresh from "./images/logo.avif"
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Header from './Header';


import { useState } from 'react';

const Navbar = () => {

  const[data,setdata]= useState(false)
  const[menu,setmenu]= useState(false)

  const inputhandler =()=>{
    setdata(!data)
  }

  const menuhandler=()=>{
    setmenu(!menu)
  }

  return (
    <>
    <Header/>
    <div>
    <div className='navbar_div'>
      <div className={data ? "input_form":"input_form_not"}>
     <input type='text' placeholder='Search here'/>
   <SearchIcon className='Seachicon_input' />
    <CloseIcon onClick={inputhandler} className='close_icon'/>
      </div>
 
      
    <div className={data ?'header':" "}>
  <div className='navbar_main'>
  <div>
  <div onClick={inputhandler}>
    {" "}
      <SearchIcon className='Seachicon1' />{" "}
    </div>
   <MenuIcon onClick={menuhandler} className='menu_icon'/>
   </div>
   <div>
  <img src={refresh} className='heading_logo' alt=''/>
  </div>

   <div className='bad_search'>
   <SearchIcon onClick={inputhandler} className='Seachicon2' />
   <LocalMallIcon className='local_mall'/>

   </div>
  

   </div>
<div className='nav'>
      <Link to  ="/" className='link'>Home</Link>
      <Link to={"/contact"} className='link'>Contact</Link>
      <Link to={"/signup"} className='link'>Signup</Link>
      <Link to={"/loginform"}className='link'>Login</Link>
      <Link to={"privacy"} className='link'>Privacy</Link>
      </div>

      <div className={menu ?"sidebar2":"sidebar1"}>
      <Link to  ="/" className='sidebar_link'>Home</Link>
      <Link to={"/contact"} className='sidebar_link'>Contact</Link>
      <Link to={"/signup"} className='sidebar_link'>Signup</Link>
      <Link to={"/loginform"}className='sidebar_link'>Login</Link>
      <Link to={"privacy"} className='sidebar_link'>Privacy</Link>
      </div>


      </div>
      </div>
      
    </div>
    </>
  )
}



export default Navbar