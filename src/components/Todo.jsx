import "./Todo.css";

function Todo({ title, paragraph }) {
  function deleteToDo(id) {
    console.log("deleteTodo()", id, title.toUpperCase()); //Any JS string methods can be applied
  }

  return (
    <div className="todo">
      <h2> {title} </h2>
      <span> {paragraph} </span>
      <button
        onClick={
          //() => {} Also use that to make the function
          // console.log("Button Clicked");
          () => deleteToDo(1) //if need to put paranthesis for parameters use () =>
        }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo; /* VERY IMPORTANT */
