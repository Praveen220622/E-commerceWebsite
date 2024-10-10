import React from 'react'
import { kitchenData } from '../stores/data/kitchen'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../stores/components/Navbar'
const KitchenSingle = () => {
    const { id } = useParams()
    const product = kitchenData.find((item) => item.id === id);

    return (
        <>
            <Navbar />
            <div className='ind-section'>
                <Link to="/Kicthen">
                    <div >
                        <FontAwesomeIcon icon={faArrowLeft} className='IconSource' />
                    </div>
                </Link>
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

export default KitchenSingle