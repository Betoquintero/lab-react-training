import React from 'react'


export default function BoxColor (props) {

  let { r,g,b } = props.boxColor;

  r = Math.floor(Math.random() * 255)

  g = Math.floor(Math.random() * 255)

  b = Math.floor(Math.random() * 255)




   return (
    <div className='card'>
    <p>rgb ({r},{g},{b})</p>    
    </div>
  )
}

// style= {'background-color=rgb'+'('+{r}+','+{g}+','+{b}+')'}