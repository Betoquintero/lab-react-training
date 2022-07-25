import React from 'react'


export default function IdCard(props) {

  const { name, rating, img, car } = props.driverCard;



   return (
    <div className= 'card'>
    <div className= 'innerCard'>       
        <ul>
            <li>First name: {name}</li>
            <li>Last name: {rating}</li>
            <li>Gender: {img}</li>
            <li>Height: {car}</li>
           
        </ul>
    </div>
    </div>
  )
}