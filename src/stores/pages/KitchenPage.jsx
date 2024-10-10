import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const KitchenPage = () => {
    const [selectedProduct, setselectedProduct] = useState([])
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setselectedProduct(selectedProduct.filter(item => item !== mango))
        } else {
            setselectedProduct([...selectedProduct, mango])
        }
    }
    const filteredProducts = selectedProduct.length === 0 ? kitchenData : kitchenData.filter((orange) => selectedProduct.includes(orange.brand))
    return (
        <>

            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    <Link to="/">
                        <div >
                            <FontAwesomeIcon icon={faArrowLeft} className='IconImage' />
                        </div>
                    </Link>
                    {kitchenData.map((phone) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(phone.brand)}
                                        onChange={() => companyHandler(phone.brand)} />
                                    {phone.brand}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProducts.map((item) => {
                        return (
                            <div>
                                <Link to={`/kitchen/${item.id}`}>
                                    <div className="pageImg">
                                        <img src={item.image} alt="mobiles" />
                                    </div>
                                </Link>
                                <div className='proModel'>
                                    {item.company},{item.model}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default KitchenPage