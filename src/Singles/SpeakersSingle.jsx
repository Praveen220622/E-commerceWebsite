import React from "react";
import { speakerData } from "../stores/data/speaker";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../stores/components/Navbar'
import { useCart } from "../stores/context/CartContext";
const SpeakerSingle = () => {
    const { id } = useParams();

    const { addToCart } = useCart()

    const product = speakerData.find((item) => item.id === id);

    return (
        <>
            <Navbar />
            <div className="ind-section">
                <Link to="/Speakers">
                    <div >
                        <FontAwesomeIcon icon={faArrowLeft} className='IconSource' />
                    </div>
                </Link>
                <div className="ind-image">
                    <img src={product.image} alt="" />
                </div>
                <div className="ind-details space">
                    <div className="ind-company">
                        <h2>{product.company}</h2>
                    </div>
                    <div className="ind-model space">
                        <h3>{product.model}</h3>
                    </div>
                    <div className="ind-price space">
                        <h2>{product.price}</h2>
                    </div>
                    <div className="ind-desc space">
                        <p>{product.description}</p>
                    </div>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default SpeakerSingle;
