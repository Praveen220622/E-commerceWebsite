import React, { useState } from 'react'
import { acData } from '../data/ac'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const AcPage = () => {
    const [selectedProduct, setselectedProduct] = useState([])
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setselectedProduct(selectedProduct.filter(item => item !== mango))
        } else {
            setselectedProduct([...selectedProduct, mango])
        }
    }
    const filteredProducts = selectedProduct.length === 0 ? acData : acData.filter((orange) => selectedProduct.includes(orange.company))
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
                    {acData.map((phone) => {
                        return (
                            <div className='pro-input'>
                                <label>
                                    <input type="checkbox"
                                        checked={selectedProduct.includes(phone.company)}
                                        onChange={() => companyHandler(phone.company)} />
                                    {phone.company}
                                </label>
                            </div>
                        )
                    })}
                </div>
                <div className='pageSection'>
                    {filteredProducts.map((item) => {
                        return (
                            <div>
                                <Link to={`/ac/${item.id}`}>
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

export default AcPage