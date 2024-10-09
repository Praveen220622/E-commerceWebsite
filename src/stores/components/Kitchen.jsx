import React from 'react'
import { kitchenData } from '../data/kitchen'
const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h2>
                    Kitchen
                </h2>
            </div>
            <div className="Prosection">
                {firstFiveImages.map((item) => {
                    return (
                        <div className='imageBox-men'>
                            <img className="Proimage-men" src={item.image} alt="kitchen" />
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Kitchen