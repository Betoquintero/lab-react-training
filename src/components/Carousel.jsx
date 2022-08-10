import React, {useState} from 'react'

export default function Carousel(props) {
    const {images} = props

    const [img, setImg] = useState(0)

    const handleNextImg = () => {
        if (img === images.length - 1){
            setImg(0)
        } else {
            setImg(img + 1)
        }

    }

    const handlePrevImg = () => {
        if (img === 0){
            setImg(images.length - 1)
        } else {
            setImg(img - 1)
        }

    }

    return(
        <>
            <img src={images[img]} width='200px' alt='random picture' />
            <div>
                <button onClick={handlePrevImg}>Back</button>
                <button onClick={handleNextImg}>Next</button>
            </div>
        </>
    )
}