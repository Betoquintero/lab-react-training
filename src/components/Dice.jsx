import React, {useState} from 'react'

export default function Dice (props) {
    const {emptyDice, dice1, dice2, dice3, dice4, dice5, dice6} = props    

    const allDices =[emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

    let randomDice = allDices[Math.floor(Math.random() * allDices.length)]

    const [randomDiceImg, setRandomDiceImg] = useState(randomDice)

    const timer = () => {
        setRandomDiceImg(emptyDice)
        setTimeout(() => {
            setRandomDiceImg(randomDice)
        }, 1000)
    }



    return(
        <img onClick= {() => timer()} src={randomDiceImg} width='200px' alt='dice' />
    )
}