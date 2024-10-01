import React from 'react'

function Button(props) {
  
  return (
    <div>
      
        
      <button className="rounded-md  h-10 w-24 font-bold bg-blue-800" >{props.value}</button>
      
    </div>
  )
}

export default Button
