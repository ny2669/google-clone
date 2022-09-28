import React from 'react'
import Image from 'next/image'
import { GrSearch } from "react-icons/gr";

const Form = ({query, word, search, st}) => {


    


  return (
    <div className='main'>
       
       <div>
        <Image src={'/image/google.png'} width={300} height={200} alt=''/>
       </div>
        
        <div>
            <form onSubmit={search}>
              <div className='form-outter'>
                <span className='mag'>
                <GrSearch className='searchIcon'/>
                </span>
                <input ref={st} type='text' value={query} onChange={word} className='input1'/>
                </div>
                <div className='button-group'>
                  <button onClick={search} className='btn'>Google Search</button>
                  <button className='btn'>Im Feeling Lucky</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form

