import React, { useState } from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const SpeakersPage = () => {
    const [selectedProduct, setselectedProduct] = useState([])
    const companyHandler = (mango) => {
        if (selectedProduct.includes(mango)) {
            setselectedProduct(selectedProduct.filter(item => item !== mango))
        } else {
            setselectedProduct([...selectedProduct, mango])
        }
    }
    const filteredProducts = selectedProduct.length === 0 ? speakerData : speakerData.filter((orange) => selectedProduct.includes(orange.brand))
    return (
        <>

            <Navbar />
            <div className="fullpage">
                <div className="pro-selected">
                    {speakerData.map((phone) => {
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
                                <Link to={`/speakers/${item.id}`}>
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

export default SpeakersPage