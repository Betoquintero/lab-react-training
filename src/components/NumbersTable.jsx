import React from 'react'

export default function NumbersTable(props){
    const {limit} = props

    let numbersArr = []

    const evenStyle = {
        width:100,
        height:100,
        backgroundColor: 'red'
    }

    const oddStyle = {
        width:100,
        height:100,
        backgroundColor: 'white '
    }

    for (let i = 1; i <= limit; i++){
        if(i % 2 === 0){
            numbersArr.push(<div key={i} style={evenStyle}><p>{i}</p></div>)
        } else {
            numbersArr.push(<div key={i} style={oddStyle}><p>{i}</p></div>)
        }
    }

    return(
        <div className='boxes'>
            {numbersArr}
        </div>
    )

}