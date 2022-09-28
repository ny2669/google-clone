import React from 'react'
import { BiNews } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";
import { GrSearch } from "react-icons/gr";
import { IoImagesOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
const HeaderOptions = () => {
  return (
    <div className='options'>
        <p> <GrSearch className='ico'/>All</p>
        <p><BiMap className='ico'/>Map</p>
        <p><IoPricetagOutline className='ico'/>Shopping</p>
        <p><BiNews className='ico'/>News</p>
        
        <p><IoImagesOutline className='ico'/>Images</p>
        <p><BiDotsVerticalRounded className='ico' />More</p>
    </div>
  )
}

export default HeaderOptions