import React, {useState} from 'react'

export default function ClickablePicture(props) {
    const {img, clickedImage} = props

    const [image, setImage] = useState(true)

    const handleToggle = () => {
        setImage(prev => !prev)
    }

    return(
        <>
            <img onClick={() => handleToggle()} src={image ? img : clickedImage} />
            
        </>
    )
}

