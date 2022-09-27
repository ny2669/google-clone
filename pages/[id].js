// import React from 'react'

// export const getStaticPaths = async () => {

// const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=400738df53d5c4fa7&q=${id}`)
  
//   const data = await res.json()
//   const paths = data.map(item => {
//   console.log(paths)
//     return{
//       params:{id : item.cacheId}
//     }
  
//   })

//   return{
//   paths: paths,
//   fallback: false,
  
//   }
  
//   }


// const Details = ({results}) => {
//   return (
//     <div></div>
//   )
// }

// export default Details


// export const getStaticProps = async (context) => {
//     const id = context.params.id
//  console.log(id)

//     const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.NEXT_PUBLIC_API_KEY}&cx=400738df53d5c4fa7&q=${id}`)
//     const data = await res.json()
    
    
//     return {
//     props:{
//       results: data
//     }

// }
// }