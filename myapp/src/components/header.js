import React, { useEffect } from 'react'
import styles from"./header.module.css";
import { useState } from 'react';

import Banner from './Banner';


const Header = () => {
 const[value,setValue]=useState(0)
 const[statement,setStatement]=useState(true)

let handler=()=>{
 setValue(value+1)
}

let cut=()=>{

    if(value>0){
    setValue(value-1)
}}

const statementhandler=()=>{
setStatement(!statement)
console.log(statement)
}

useEffect(()=>{
    console.log("statemnet is changing")
})

 let a="abhay is lol"
  return (
    <div className={styles.header}>header
    <h1>Counter</h1>

    
<button onClick={handler}>Add</button>
<h1>{value}</h1>
<button onClick={cut}>Sub</button>



<button onClick={statementhandler}>Click here</button>

<h2>{statement}</h2>

{/* <Banner heading ={a}/> */}
    </div>
  )
}

export default Header;
