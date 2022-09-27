import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai';

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
        <span><AiOutlineAppstore/></span>
        
      </div>


    </div>
  )
}

export default Header