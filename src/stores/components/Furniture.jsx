import React from 'react'
import { furnitureData } from '../data/furniture'
const Furniture = () => {
    const firstFiveImages = furnitureData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Furniture
            </h2>
        </div>
        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox-men'>
                        <img className="Proimage-men" src={item.image} alt="furniture" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Furniture