import "./Counter.css"
import React, {useState} from "react";

function Counter() {

    const [count, changeCount] = useState(0);

    const increment = () => {
        changeCount(count + 1);
    };

    const decrement = () => {
        changeCount(count - 1);
    };

  return (
    <>
      <div className="container">
        <button className="btn__subtract" onClick={decrement}>-</button>
        <h1 className="counter">{count}</h1>
        <button className="btn__add" onClick={increment}>+</button>
      </div>
    </>
  );
}

export default Counter