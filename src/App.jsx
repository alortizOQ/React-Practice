import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx"; /* How to import the file */
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";

function App() {
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
        <button>Add to-do</button>
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
      <Modal
        confirmation="Are you sure you want to delete?"
      />
    </div>
  );
}

export default App;
