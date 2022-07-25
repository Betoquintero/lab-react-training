import React from 'react'


export default function Random (props) {

  let { min, max } = props.random;

  min = Math.floor(Math.random() * 6)

  max = Math.floor(Math.random() * 100)


   return (
    <div className='card'>
    <p>Random value between 1 and 6:  {min}</p>
    <p>Random Value between 1 and 100: {max}</p>
    </div>
  )
}