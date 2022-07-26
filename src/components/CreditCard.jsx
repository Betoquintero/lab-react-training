import React from 'react'
import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'



export default function CreditCard (props) {

  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color  } = props.creditCard;

  const cardNumbers = '· · · ·   · · · · · · · · ' + number.slice(12)

  const cardStyle = {
    backgroundColor:`${bgColor}`,
    color:`${color}`
  }

  let cardImg = ''

  if (type === 'Visa'){
    cardImg = visa   
  } else if (type === 'Master Card'){
    cardImg = mastercard   
  }


   return (
   
        <div style={cardStyle} className="singleCard">
            <img width="70px" src={cardImg} alt="card logo"/>
            <p>{cardNumbers}</p>
            <div className='exp'>
                <p>Expires {expirationMonth} / {expirationYear}</p>
                <p>{bank}</p>
            </div>
            <div className='own'>
                <p>{owner}</p>
            </div>           
            
        </div>

  )
}