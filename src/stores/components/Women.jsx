import React from 'react'
import { womanData } from '../data/woman'
const Women = () => {
    const firstFiveImages = womanData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h2>
                    Woman-Wear
                </h2>
            </div>
            <div className="Prosection">
                {firstFiveImages.map((item) => {
                    return (
                        <div className='imageBox-men'>
                            <img className="Proimage-men" src={item.image} alt="women-wear" />
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Women