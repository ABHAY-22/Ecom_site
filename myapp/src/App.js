import React from 'react'

import Navbar from './components/Navbar';
import Header from './components/header';

let a=20;

a=220;
a=400;
a=100;

// console.log(a)

var b =30;
b =40;


// console.log(b)

//const 

const c =10;



function lallu(){
    // const l=300;
    // console.log(l)
}

lallu()


//arrow 
const z=()=>{
const f="yankdn"
//  console.log(f)
//  console.log("abhay is")
}

z()

function fun3( y=550,g=30){

// console.log(y+g)

}

fun3()


const final=(x=100,y=800)=>{
    // console.log(x+y)
}

final()
//parameters

const number =[23,4,5,7,9,8,8,8]
// console.log(number[3])

const join =number.join(",")

const sort=number.sort()

const app="apple"
const ban="bananna"
const fruit=app+ban;

const fav=["roti","daal","chaawal"]

const ba =fav.push("makkan")
 

const x=fav.slice(2)

const alex=fav.slice(1)
// const y=fav.unshift("roti")

// console.log(c)

const hated=["loud","hampe","hdhd"]

const array=[1,3,4,7]

// function mul(){
// const ne=9;
// const old=8;
// return ne+old;
// }
// mul()

const nam=array.map((e,i)=>{
return e*e
})

const ans=array.map((e)=>e*e)

// console.log(ans)

// console.log(nam)

//filter
let fin=[3,5,5,33,0]

let you=fin.filter((e)=>e>33)

// console.log(you)

let abhinav=[2,2,4,4,10,8]
let abhay=abhinav.map((e)=>e/2).filter((e)=>e>1)
// console.log(abhay)


//reduce
var alpha=[100,1,1,1,8];
var beta=alpha.reduce((acc,curr)=>{
    return curr
})
console.log(beta)


const success=hated.concat(fav)
const App = () => {
  return (
    <div>App
        <Navbar/>
        <Header/>
       
    </div>
  )
}

export default App