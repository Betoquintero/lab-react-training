import React from 'react'


export default function Rating (props) {

  let { children } = props.rating;

  children = Math.floor(Math.random() * 6)

 


   return (
    <div className='card'>
    <p>Rating:{children}</p>    
    </div>
  )
}