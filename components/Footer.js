import React from 'react'


const Footer = () => {

  const d = new Date();
let year = d.getFullYear();
  return (
    <div className='footer'>
      <p>copyright &copy; {year} Linkcodez</p>
    </div>
  )
}

export default Footer