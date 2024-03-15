import React from 'react'

const Banner = (props) => {


    
    const banner=()=>{
    let x=props.heading
    console.log(x)
    }
  return (
    <div>
        
        <h2>Banner</h2>
        <h1>{props.heading}</h1>
        <button onClick={banner}>click here</button>
        
    </div>
  )
}

export default Banner