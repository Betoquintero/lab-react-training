import React from 'react'
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';


export default function IdCard(props) {

  const { lastName, firstName, gender, height, birth, picture } = props.client;



   return (
    <div className= 'card'>
    <div className= 'innerCard'>
        <img width='100px' src= {picture} alt='client picture' />
        <ul>
            <li>First name: {firstName}</li>
            <li>Last name: {lastName}</li>
            <li>Gender: {gender}</li>
            <li>Height: {height}</li>
            <li>Birth: {birth}</li>
        </ul>
    </div>
    </div>
  )
}