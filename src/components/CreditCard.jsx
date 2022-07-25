import React from 'react'


export default function CreditCard (props) {

  const { type, number, expirationMonth, expirationYear, bank, owner, bgcolor, color  } = props.creditCard;




   return (
    <div className='card'>
    <p>{type}</p>
    <p>{number}</p>
    <p>{expirationMonth}</p>
    <p>{expirationYear}</p>
    <p>{bank}</p>
    <p>{owner}</p>
    </div>
  )
}