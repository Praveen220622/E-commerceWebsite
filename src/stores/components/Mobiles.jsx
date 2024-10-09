import React from 'react'
import { mobileData } from '../data/mobiles'
const Mobiles = () => {
    const firstFiveImages = mobileData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h2>
                    Mobiles
                </h2>
            </div>
            <div className="Prosection">
                {firstFiveImages.map((item) => {
                    return (
                        <div className='imageBox'>
                            <img className="Proimage" src={item.image} alt="mobiles" />
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Mobiles