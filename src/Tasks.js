import {AiFillEdit, AiFillDelete} from "react-icons/ai"

	const Task = ({text, updatingInInput, deleteTask}) => {
	return (
	
		<div className="grey-box">
			<div className="white-box">
			
				<div className="input-task">
					<p>{text}</p>
				</div>

				<div className="icons">
					<div className="delete-icon">
						<AiFillDelete onClick={deleteTask}></AiFillDelete>
					</div>
					<div className="edit-icon">
					<AiFillEdit onClick={updatingInInput}></AiFillEdit>
					</div>
				</div>
			</div>
	</div>)
}
export default Task;