import React from 'react'
import { speakerData } from '../data/speaker'
const Speakers = () => {
    const firstFiveImages = speakerData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Speakers
            </h2>
        </div>

        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox'>
                        <img className="Proimage" src={item.image} alt="Speakers" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Speakers