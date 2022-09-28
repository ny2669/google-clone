import React from 'react'
import { IoIosKeypad } from "react-icons/io";

const Header = () => {
  return (
    <div className='container'>
      <div className='left'>
        <p>About</p>
        <p>Store</p>
      </div>
      <div className='right'>
        <p>Gmail</p>
        <p>Images</p>
        <span>  <IoIosKeypad /></span>
       <p className='letter'>N</p>
      </div>


    </div>
  )
}

export default Header