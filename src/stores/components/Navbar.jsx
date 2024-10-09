import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
        <div className='top-section'>
            <div className='navsection'>
                <Link to='/'>
                    <div className=" title">
                        <h2>E-Mart</h2>
                    </div>
                </Link>
                <div className='search'>
                    <input type="text" placeholder='search' />
                </div>
                <div className='user'>
                    <div className='user-detials'>
                        SignIn/SignUp
                    </div>
                    <Link to='/cart'>
                        <div className='cart'>
                            Cart
                        </div>
                    </Link>

                </div>
            </div>
            <div className="SubMenu">
                <ul items>
                    <Link to='/mobiles'><li>Mobiles</li></Link>
                    <Link to='/Computers'><li>Computers</li></Link>
                    <Link to='/Watches'><li>Watches</li></Link>
                    <Link to='/Men-Fashion'><li>Men_Fashion</li></Link>
                    <Link to='/Women_dressing'><li>Women_dressing</li></Link>
                    <Link to='/Books'><li>Books</li></Link>
                    <Link to='/Furniture'><li>Furniture</li></Link>
                    <Link to='/Kicthen'><li>Kitchen</li></Link>
                    <Link to='/Fridge'><li>Fridge</li></Link>
                    <Link to='/Speakers'><li>Speakers</li></Link>
                    <Link to='/Ac'><li>Ac</li></Link>
                    <Link to='/Tv'><li>Tv</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar