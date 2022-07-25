import React from 'react'


export default function IdCard(props) {

  const { lastName, firstName, gender, height, birth, picture } = props.client;



   return (
    <div className= 'card'>
    <div className= 'innerCard'>
        <imgage src= {picture} alt='client picture' />
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