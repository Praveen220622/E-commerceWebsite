import React from 'react'
import { booksData } from '../data/books'
const Book = () => {
    const firstFiveImages = booksData.slice(0, 5)
    return (<>
        <div className='proTitle'>
            <h2>
                Ac
            </h2>
        </div>

        <div className="Prosection">
            {firstFiveImages.map((item) => {
                return (
                    <div className='imageBox'>
                        <img className="Proimage" src={item.image} alt="Books" />
                    </div>
                )
            })}

        </div>
    </>
    )
}

export default Book