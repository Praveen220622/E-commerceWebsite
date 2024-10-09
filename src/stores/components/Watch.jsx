import React from 'react'
import { watchData } from '../data/watch'
const Watch = () => {
    const firstFiveImages = watchData.slice(0, 5)
    return (
        <>
            <div className='proTitle'>
                <h2>
                    Watches
                </h2>
            </div>
            <div className="Prosection">
                {firstFiveImages.map((item) => {
                    return (
                        <div className='imageBox'>
                            <img className="Proimage" src={item.image} alt="watches" />
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Watch