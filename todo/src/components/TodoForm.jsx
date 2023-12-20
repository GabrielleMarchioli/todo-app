import { useState } from "react";

const TodoForm = ({ addTodo }) => {
    const[value, setValue] = useState("");
    const[category, setCategory] = useState("");
    const[priority, setPriority] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category || !priority){
            setError("Please fill in all fields!");
            return;
        }
        //limpa a mensagem de erro se todos os campos estiverem preenchidos
        setError("");

        //adiciona a tarefa
        addTodo(value, category, priority);

        //mensagem de sucesso
        setSuccessMessage("Task added successfully!");

        setTimeout(() => {
            setSuccessMessage("");
          }, 2000);

        setValue("");
        setCategory("");
        setPriority("");
    };

    return(
     <div className="todo-form">
    <h2>Create Task:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Enter The Task Name" 
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a Category</option>
            <option value="Study">Study</option>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="">Select Priority</option>
            <option value="Urgent">Urgent</option>
            <option value="Not Urgent">Not urgent</option>
        </select>
        <button type="submit">Submit Task</button>
        {error && <p style={{ color: "red", margin: 0, marginTop: 5}}>{error}</p>}
        {successMessage && <p style={{ color: "green", margin: 0, marginTop: 5 }}>{successMessage}</p>}
    </form>
    </div>
    )
};

export default TodoForm;