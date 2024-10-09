import React from 'react'
import { fridgeData } from '../data/fridge'
const Fridge = () => {
    const firstFiveImages = fridgeData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Fridges
            </h2>
        </div>

        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox'>
                        <img className="Proimage" src={item.image} alt="Fridges" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Fridge