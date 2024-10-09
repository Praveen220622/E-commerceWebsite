import React from 'react'
import { watchData } from '../stores/data/watch'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
const WatcheSingle = () => {
    const { id } = useParams()
    const product = watchData.find((item) => item.id === id); // Assuming id is a number, otherwise, use item.id === id if it's a string.

    return (
        <>
            <Navbar />
            <div className='ind-section'>
                <div className="ind-image">
                    <img src={product.image} alt="" />
                </div>
                <div className='ind-details space'>
                    <div className="ind-company">
                        <h2>{product.company}</h2>
                    </div>
                    <div className="ind-model">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="ind-price">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="ind-desc">
                        <p>{product.description}</p>
                    </div>
                    <button>Add to Cart</button>
                </div>

            </div>
        </>
    )
}

export default WatcheSingle