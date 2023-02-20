import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx"; /* How to import the file */
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";
import Counter from "./components/Counter";
import Cart from "./components/Cart"
function App() {
  return(
    <>
    {/* <Counter /> */}
    <Cart />
    </>
  );

  // let isModalOpen = false;

  // function toggleModal() {
  //   isModalOpen = !isModalOpen;
  //   console.log(isModalOpen);
  // } Not how you want to define variables

  const [showModal, setShowModal] = useState(false); //DEFAULT VALUE INSIDE PARENTHESIS
  //in [] first will be current state(showModal) the next one will be update that state(setShowModal)

  return (
    <div>
      {/* Long Hand Notation of components */}
      {/*<Todo></Todo>*/}

      {/* Short hand Notation of components */}
      <Title />

      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add to-do</button>
      </div>

      <div className="todo__wrapper">
        {/* To pass anything else but a string use '{}' */}
        <Todo
          title="Hit New PR"
          paragraph="Eat well before training to be full of energy."
        />
        <Todo
          title="Bench Press 180"
          paragraph="Use smelling salts to get extremely pumped up"
        />
        <Todo
          title="Squat 200"
          paragraph="Listen to crazy gym music and get HYPE"
        />
        {/* Create prop: <Todo propName="Prop Value" />*/}
      </div>

      {/* Can Also use double && instead of Ternary operator, NEEDS to be boolean*/}
      {showModal && <Modal confirmation="Confirm Delete" />}

      {/* {isModalOpen ? <Modal confirmation="Confirm Delete" /> : null} */}
      {/* Use Ternary Operators */}
    </div>
  );
}

export default App;
