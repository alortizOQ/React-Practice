import "./Counter.css";
import React, { useState } from "react";

function Counter() {
  const [cart, setCart] = useState({ item: "apple", quantity: 0 });

  function addApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity + 1,
    }));
  }
  function subtractApple() {
    setCart((prevCart) => ({
      ...prevCart,
      quantity: prevCart.quantity - 1,
    }));
  }

  return (
    <>
      <div className="container">
        <button className="btn__subtract" onClick={subtractApple}>
          -
        </button>
        {cart.quantity}
        {' '}
        {cart.item}
        <button className="btn__add" onClick={addApple}>
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
