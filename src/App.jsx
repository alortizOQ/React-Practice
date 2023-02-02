import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo' /* How to import the file */
import Title from './components/Title'

function App() {
  return (
    <div>


      {/* Long Hand Notation of components */}
      {/*<Todo></Todo>*/} 

      {/* Short hand Notation of components */}
      <Title />
      <Todo /> 
      <Todo />
      <Todo /> 
    </div>
  );
}

export default App;
