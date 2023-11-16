import React from 'react'

const YOUR_APP_ID = "243fb870";
const YOUR_APP_KEY = "d3d6eab73067709e355c91eab416ebc9";
let getData = async (recipe)=>{
  let data = await fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
  data = await data.json()
  return data 
  console.log(recipe);
}

const page = ({recipe}) => {

console.log({recipe});


  return (

    <>

      <div  >
        

      </div>
    
    
    </>
  )
}

export default page