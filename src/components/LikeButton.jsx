import React, {useState} from 'react'

export default function LikeButton() {
    const [counter, setCounter] = useState(0)

    const handleLikes = () => {
        let updateddCounter = setCounter(counter  + 1)
        return updateddCounter
    }

    const colors = ['purple','blue','green','yellow','orange','red']

    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    let bgColor = {
        backgroundColor: randomColor
    }


    return (
        <>
            <button onClick={handleLikes} style={bgColor} className='btn'>{counter} Likes</button>
        </>
    )
}