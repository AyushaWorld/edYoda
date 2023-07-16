import React from 'react';
import logo from '../assets/images/logo192.png';
import {BiSearch} from "react-icons/bi";
import {MdKeyboardArrowDown} from "react-icons/md";

export default function Navbar() {
  return (
    <>
    <div className="navStyle">
      <div className='navStyleChiled'>
        <img src={logo} className="App-logo" alt="logo" />
        <p href="#">Courses </p><i className='icon'><MdKeyboardArrowDown /></i>
        <p href="#">Program </p><i className='icon'><MdKeyboardArrowDown /></i>
      </div>
      <div className='navStyleChiled'>
        <a className='icon'><BiSearch/></a>
        <a href="#">Log In</a>
        <button>Join NOw</button>
      </div>
    </div>
    </>
  )
}
