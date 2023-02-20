import "./Counter.css"
import React, {useState} from "react";

function Counter() {

    const [count, changeCount] = useState(0);

    const increment = () => {
        changeCount((prevCounter) => prevCounter + 1); //Use callback () =>
        changeCount((prevCounter) => prevCounter + 1);
    };

    const decrement = () => {
        changeCount((prevCounter) => prevCounter - 1)
        changeCount((prevCounter) => prevCounter - 1)
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