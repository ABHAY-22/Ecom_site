import React from 'react'
import "../styles/amazon.css"

import list from "../data"
import Shopcart from './shopcart'

import { useState } from 'react'

export const Amazon = () => {

   const[cart,setcart]=useState([]);

   const handleClick=(list)=>{
    

    cart.push(list)
    console.log(cart)
   }

  return (
    <div>{
        
        list.map((list)=>(
            <Shopcart handleClick={handleClick} key={list.id} list={list}/>
        ))
        }



    </div>
  )
}

export default Amazon;
