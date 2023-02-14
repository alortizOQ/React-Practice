import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx"; /* How to import the file */
import Title from "./components/Title.jsx";
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      {/* Long Hand Notation of components */}
      {/*<Todo></Todo>*/}

      {/* Short hand Notation of components */}
      <Title />

      <div className="todo__wrapper">
        <Todo title="Hit New PR" /> {/* To pass anything else but a string use '{}' */}
        <Todo title="Bench Press 180" />
        <Todo title="Squat 200" />
        {/* Create prop: <Todo propName="Prop Value" />*/}
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
