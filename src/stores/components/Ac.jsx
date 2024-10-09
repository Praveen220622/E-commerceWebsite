import React from 'react'
import { acData } from '../data/ac'
const Ac = () => {
    const firstFiveImages = acData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Ac
            </h2>
        </div>

        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox-men'>
                        <img className="Proimage-men" src={item.image} alt="ac" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Ac