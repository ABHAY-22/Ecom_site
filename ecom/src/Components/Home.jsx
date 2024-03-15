import React from 'react'
import "./Home.css"
import imgheader from "./images/01.webp"
import Cartform from './Cartform'

const Home = () => {
  return (

    <div>
    <div className='home_header'>
<div className='data'>
      <div className='header_container'>
        <h1>Hair</h1>
        <p>
          Start from the top.We'have got you covered with a range of formulas to keep your hair in best shape and in good condition
        </p>

        <button  className='Shampoobtn'>Shop Shampoo</button>
      </div>
      </div>
 <Cartform/>
      </div>
    </div>
  )
}

export default Home