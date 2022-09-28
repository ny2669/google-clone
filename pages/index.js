import React, { useRef, useState} from 'react'
import Form from '../components/Form'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'



 const Home = ({results}) => {


  const router = useRouter()
  const searchTerm = useRef()

 
  // const [query, setQuery] = useState([])
  const [formInputs, setFormInputs] = useState({})
  const [wordInput,setWordInput] = useState('')

    // use ref




  const handleInput = (e) =>{
let {name, value} = e.target
    setWordInput({...formInputs, [name] : value})
    setWordInput(e.target.value)
}



  const search = (e) => {

    e.preventDefault()

    const term =  searchTerm.current.value


 

    router.push(`/search?term=${term}}`)

    setWordInput('')

  }



 


  return (
    <>
 <header>
  <Header/>
 </header>
    <Form st={searchTerm} search={search} word={handleInput} query={wordInput} />
 

    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default Home

// export const getStaticProps = async (context) =>{



// const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=400738df53d5c4fa7&q=${context.params}`)
// const data = await res.json()


// return{
// props:{
//   results: data
// }
 
// }

// }