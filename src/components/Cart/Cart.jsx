import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if(cart.length===0){
        message = <p>please add some product</p>
    }else{
        message = <p>Thanks for wasting your money</p>
    }
  return (
    <div>
      <h2>Order summary: {cart.length}</h2>
      {message}
      {cart.map((tshirt, index) => (
        <p key={index}>
          {tshirt.name} <button 
          onClick={()=>handleRemoveFromCart(tshirt._id)}
          >X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
