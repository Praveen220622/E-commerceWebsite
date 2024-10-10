import React from 'react'
import { computerData } from '../stores/data/computers'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../stores/components/Navbar'
const ComputerSingle = () => {
    const { id } = useParams()
    const product = computerData.find((item) => item.id === id); // Assuming id is a number, otherwise, use item.id === id if it's a string.

    return (
        <>
            <Navbar />
            <div className='ind-section'>
                <Link to="/Computers">
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

export default ComputerSingle