import React from 'react'
import Link from 'next/link'

const SearchResults = ({results}) => {
  
    
  const test = results.items?.map(call => {

    return(
      <>
      <div key={call.cacheId} className='card'>
<div>
<a href={`${call.displayLink}`}>{call.displayLink}</a>
  <a href={`${call.displayLink}`}><h3>{call.title}</h3></a>
<p className='snippet'>{call.snippet}</p>
</div>
      </div>
      
      </>
    )

  })

  return(

    <div className='test'>{test}</div>
  )
  
}

export default SearchResults
