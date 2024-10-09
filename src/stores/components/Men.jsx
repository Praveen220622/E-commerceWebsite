import React from 'react'
import { menData } from '../data/men'
const Men = () => {
    const firstFiveImages = menData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Men-Wear
            </h2>
        </div>
        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox-men'>
                        <img className="Proimage-men" src={item.image} alt="menwear" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Men