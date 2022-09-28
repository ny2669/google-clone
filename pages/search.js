import React, { useRef, useState} from 'react'
import SearchHeader from "../components/SearchHeader"
import {useRouter} from 'next/router'
import SearchResults from '../components/SearchResults'



const Search = ({handleInput, wordInput, results}) => {

  
  const router = useRouter()
  const searchTerm = useRef()

  const search = (e) => {

    e.preventDefault()

    const term =  searchTerm.current.value


 

    router.push(`/search?term=${term}}`)

  }


  return (
    <div>
      <SearchHeader st={searchTerm} search={search} word={handleInput} query={wordInput} />
      <SearchResults results={results}/>
    </div>
  )
}

export default Search

export const getServerSideProps = async (context) =>{

  console.log(context.query.term)

  const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=400738df53d5c4fa7&q=${context.query.term}`)
    const data = await res.json()

return{
  props: {
results: data

  }
}

}