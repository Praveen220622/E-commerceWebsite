import React from 'react'
import { tvData } from '../data/tv'
const Tv = () => {
    const firstFiveImages = tvData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Tv
            </h2>
        </div>

        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox'>
                        <img className="Proimage" src={item.image} alt="Tv" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Tv