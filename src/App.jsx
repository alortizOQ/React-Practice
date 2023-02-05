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
        <Todo />
        <Todo />
        <Todo />
      </div>
      <Modal />
    </div>
  );
}

export default App;
