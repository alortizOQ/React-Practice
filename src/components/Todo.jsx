import "./Todo.css";

function Todo(props) {
    console.log(props.title)
  return (
    <div className="todo">
      <h2> {props.title} </h2>
      <span>Description</span>
      <button>Delete</button>
    </div>
  );
}

export default Todo; /* VERY IMPORTANT */
