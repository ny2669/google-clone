import React, {useState} from 'react'
import Form from '../components/Form'
import Link from 'next/link'



 const Home = ({results}) => {
 
  const [query, setQuery] = useState([])
  const [formInputs, setFormInputs] = useState({})
  const [wordInput,setWordInput] = useState('')
console.log(query)
 

  const handleInput = (e) =>{
let {name, value} = e.target
    setWordInput({...formInputs, [name] : value})
    setWordInput(e.target.value)
}


  const search =  async (e) => {

    e.preventDefault()

    const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=400738df53d5c4fa7&q=${wordInput}`)
    const data = await res.json()
    
    setQuery(data)

  }


  const test = query.items?.map(call => {

    return(
      <>
      <div key={call.cacheId} className='card'>
<div>
<Link href={`/details`}><a>{call.displayLink}</a></Link>
  <Link href={`/`}><h3>{call.title}</h3></Link>
<p>{call.snippet}</p>
</div>
      </div>
      
      </>
    )

  })

 


  return (
    <>
 
    <Form search={search} word={handleInput} query={wordInput} />
    {test}
    </>
  )
}

export default Home

export const getStaticProps = async (context) =>{



const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=400738df53d5c4fa7&q=${context.params}`)
const data = await res.json()


return{
props:{
  results: data
}
 
}

}