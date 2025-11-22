import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ loggedInUser, handleLogout }) => {
  return (
    <div className="top-section">
      <div className="navsection">
        <Link to="/">
          <div className="title">
            <h2>E-Mart</h2>
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search" />
        </div>

        <div className="user">
          {loggedInUser ? (
            <>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <span className="user-details">Logout</span>
            </Link>
          )}

          <Link to="/cart">
            <div className="cart">Cart</div>
          </Link>
        </div>
      </div>

      <div className="SubMenu">
        <ul className="items">
          <Link to="/mobiles">
            <li>Mobiles</li>
          </Link>
          <Link to="/computers">
            <li>Computers</li>
          </Link>
          <Link to="/watches">
            <li>Watches</li>
          </Link>
          <Link to="/men-fashion">
            <li>Men</li>
          </Link>
          <Link to="/women">
            <li>Women</li>
          </Link>
          <Link to="/books">
            <li>Books</li>
          </Link>
          <Link to="/furniture">
            <li>Furniture</li>
          </Link>
          <Link to="/kitchen">
            <li>Kitchen</li>
          </Link>
          <Link to="/fridge">
            <li>Fridge</li>
          </Link>
          <Link to="/speakers">
            <li>Speakers</li>
          </Link>
          <Link to="/ac">
            <li>AC</li>
          </Link>
          <Link to="/tv">
            <li>TV</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
