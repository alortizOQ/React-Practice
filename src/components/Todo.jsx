import "./Todo.css";

function Todo({ title, paragraph }) {
  console.log(title);
  return (
    <div className="todo">
      <h2> {title} </h2>
      <span> {paragraph} </span>
      <button>Delete</button>
    </div>
  );
}

export default Todo; /* VERY IMPORTANT */
