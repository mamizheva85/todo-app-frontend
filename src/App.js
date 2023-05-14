import { useEffect, useState } from 'react';
import './App.css';
import Tasks from './Tasks';
import { getAllTasks, addTask, editTask, deleteTask } from './FetchTask';



function App() {
	const[Task, setTask] = useState([]);
	const [title, setTitle] = useState("");
	const [editing,setEditing] = useState(false);
	const [taskId, setTaskId] = useState("")

	useEffect(() =>{
		getAllTasks(setTask);
	}, [])

	const updatingInInput = (_id, title) => {
		setEditing(true)
		setTitle(title)
		setTaskId(_id)
	}

	return (<div className='main-container'>
		<h2>TODO LIST</h2>
		<button className ="btn"
		onClick={editing ? () => editTask(taskId, title, setTask, setTitle, setEditing) : () => addTask(title, setTitle, setTask) }>
		{editing ? "Edit task" : "Add task"}</button>
		<input className="search"
			type="text"
			placeholder="Add your task"
			value= {title}
			onChange = {(e) => setTitle(e.target.value)}
		/>
	{Task.map((task) => <Tasks text={task.title} key={task._id}
		updatingInInput={() => updatingInInput(task._id, task.title)}
		deleteTask={() => deleteTask(task._id,setTask)}
	/>
	)}
	</div>
);
}

export default App;
