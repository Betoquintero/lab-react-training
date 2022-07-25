import React from 'react'


export default function Greetings(props) {

  const { lang, children } = props.greetings;
  let greet = ''
  if (lang === 'de'){
      greet = 'Hallo'
  } else if (lang === 'en'){
      greet = 'Hello'
  }

   return (
    <div className='card'>
    <p>{greet} {children}</p>
    </div>
  )
}