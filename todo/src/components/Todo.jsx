import React from 'react'; 

const Todo = ({ todo, removeTodo, completeTodo }) => {
  const priorityStyle = {
    color: todo.priority === 'Urgent' ? 'red' : 'green',
  };
  return (
    <div className = "todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        <div className="content">
        <p>
          <span style={{ fontWeight: 'bold', color: 'black' }}>Task: </span> {todo.text}
        </p>
        <p className = "category">
          <span style={{ fontWeight: 'bold', color: 'black' }}>Type: </span>{todo.category}
        </p>
        <p className="priority">
        <span style={{ fontWeight: 'bold', color: 'black' }}>Priority: </span>
        <span style={priorityStyle}>{todo.priority}</span>
        </p>
        </div>
        <div>
          <button className= "complete" onClick={()=>completeTodo(todo.id)}>Complete</button>
          <button className="remove" onClick={()=>removeTodo(todo.id)}>X</button>
        </div>
    </div>
  );
};

export default Todo;