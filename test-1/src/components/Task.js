import './Task.css'

function Task({ data, onChange, removeTodo }) {
        
    return (
        <div className={data.isDone ? "containerDone" : "container"}>
            <input type="checkbox" checked={data.isDone} onChange={() => onChange(data.id)} />
            <p>{data.text}</p>
            <button onClick={() => removeTodo(data.id)}>
            <img className='trash-icon' src={require('../assets/icons/trash.png')} />
            </button>
      </div>
    );
}

export default Task;