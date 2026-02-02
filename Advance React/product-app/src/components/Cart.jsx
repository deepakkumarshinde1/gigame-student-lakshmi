import React from "react";
import "../assets/css/Cart.css";

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>
        <i className="fa fa-shopping-cart"></i> Cart
      </h2>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <span>{item.title}</span>
          <span>$ {item.price}</span>
        </div>
      ))}

      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default Cart;
