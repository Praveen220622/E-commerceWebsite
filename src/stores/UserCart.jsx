import React from "react";
import { useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import "./UserCart.css";

const UserCart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your Cart is Empty</p>
        ) : (
          <div className="cart-list">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-img-box">
                  <img src={item.image} alt={item.product} />
                </div>

                <div className="cart-details">
                  <h3 className="cart-product">{item.product}</h3>
                  <h2 className="cart-price">₹ {item.price}</h2>
                  <h4 className="cart-model">{item.model}</h4>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserCart;
