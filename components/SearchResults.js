import React from 'react'
import Link from 'next/link'

const SearchResults = ({results}) => {
  
    
  const test = results.items?.map(call => {

    return(
      <>
      <div key={call.cacheId} className='card'>
<div>
<Link href={`${call.displayLink}`}><a>{call.displayLink}</a></Link>
  <Link href={`/${call.displayLink}`}><a><h3>{call.title}</h3></a></Link>
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