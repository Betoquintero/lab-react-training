import React from 'react'


export default function BoxColor (props) {

  let { r,g,b } = props.boxColor;

  r = Math.floor(Math.random() * 255)

  g = Math.floor(Math.random() * 255)

  b = Math.floor(Math.random() * 255)

  const backColor={
    backgroundColor:`rgb(${r},${g},${b})`
  }




   return (
    <div style={backColor} className='card'>
    <p>rgb ({r},{g},{b})</p>    
    </div>
  )
}