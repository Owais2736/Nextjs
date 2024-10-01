import React from 'react'
import Button from './Button'

function Body() {
  return (
    <div className='container flex'>
      <div className="left w-1/2">
<h1 className='text-6xl pt-20 pl-20'>Hay' i m <br /> Owais Ali</h1> <br />
<p className='pl-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum <br /> veniam ab alias atque corporis laboriosam quae totam ipsa nesciunt.</p>
<br />
<div className='pl-20'>
<Button  value={"About Me"}/>
</div>

      </div>

      <div className="right w-1/2">
      <img className=' rounded-md pt-5' width={300}  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />

      </div>
    </div>
  )
}

export default Body
