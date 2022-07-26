import React from 'react'


export default function Rating (props) {

  let { children } = props.rating;

  children = Math.round(Math.random() * 5)
  let rating = ''

  if (children == 0){
    rating = '😞'
  } else if (children == 1){
    rating = '🌟'
  } else if (children == 2){
    rating = '🌟🌟'
  } else if (children == 3){
    rating = '🌟🌟🌟'
  } else if (children == 4){
    rating = '🌟🌟🌟🌟'
  } else if (children == 5){
    rating = '🌟🌟🌟🌟🌟'
  }
  
   return (
    <div className='card'>
    <p>Rating:{children} {rating}</p>    
    </div>
  )
}