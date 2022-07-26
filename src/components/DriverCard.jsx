import React from 'react'


export default function DriverCard(props) {

  const { name, rating, img, car } = props.driverCard;

  let driverRating = ''
  driverRating = Math.round(Math.random() * 5)

  let starsRating = ''

  if (driverRating == 0){
    starsRating = '😞'
  } else if (driverRating == 1){
    starsRating = '🌟'
  } else if (driverRating == 2){
    starsRating = '🌟🌟'
  } else if (driverRating == 3){
    starsRating = '🌟🌟🌟'
  } else if (driverRating == 4){
    starsRating = '🌟🌟🌟🌟'
  } else if (driverRating == 5){
    starsRating = '🌟🌟🌟🌟🌟'
  }



   return (
    <div className= 'driverCard'>
    <img width="60px" src={img} alt ="profile picture" />
    <div className="info">
        <h2>{name}</h2>
        <p className="rating">{starsRating}</p>
        <p className="car">{car.model} - {car.licensePlate}</p>
    </div>
    
    </div>
  )
}