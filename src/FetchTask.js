import axios from 'axios';

const getAllTasks = (setTask) => {
	axios.get ('https://todo-app-5hil.onrender.com')
	.then (({data}) => {console.log(data)
		setTask(data)
	})
}

const addTask = (title, setTitle, setTask) => {
	axios.post(`https://todo-app-5hil.onrender.com/saveTask`, {title})
	.then((data) => {
		console.log(data);
		setTitle("");
		getAllTasks(setTask)
	})
}

const editTask = (taskId, title, setTask, setTitle,  setEditing) => {

	axios.post(`https://todo-app-5hil.onrender.com/editTask`, {_id: taskId , title})
	.then((data) => {
		console.log(data)
		setTitle("")
		setEditing(false)
		getAllTasks(setTask)
	})
}

const deleteTask = (_id, setTask) => {
	axios.post(`https://todo-app-5hil.onrender.com/deleteTask`, {_id})
	.then((data) => {
		console.log(data)
		getAllTasks(setTask)
	})
}


export {getAllTasks, addTask, editTask, deleteTask}