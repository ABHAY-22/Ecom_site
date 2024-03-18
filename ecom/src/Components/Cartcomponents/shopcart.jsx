import React from 'react'
import "../styles/shopcart.css"

const Shopcart = ({list,handleClick}) => {

    if(list){
    const{name,price,image}=list;
    const newhandleclick=()=>{
        handleClick(list)

    }
  return (
    <section>
    <div className='cards'>
    <div className='image_box'>

<div className='details'>

<p>{name}</p>
<p>Price:Rs{price}</p>
<img className='imgbottle' src={image} alt= ""/>
{/* <button onClick={()=>{handleClick(list)}}>Add to cart</button> */}
<button onClick={newhandleclick}>Add to cart</button>
</div>

    </div>

    </div>
    </section>
  )
    }

    else{
       return  <p>there is no item</p>
    }
}

export default Shopcart;