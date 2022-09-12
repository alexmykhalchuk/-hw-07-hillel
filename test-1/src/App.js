//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Button from "./components/button";
import Task from "./components/Task";

function App() {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState('');

  const createTask = () => {
    const task = {
      id: Date.now(),
      text: text,
      isDone: false
    }
    setTask(tasks => [...tasks, task]);
    setText('');
  }

  const changeIsDone = (id) => {
    setTask(
    tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone: !task.isDone
        };
      }
        return task;
        //task.isDone = !task.isDone;
      })
    );
  }

  const deleteTask = (id) => {
    setTask(tasks => tasks.filter(task => task.id !== id));
  }

  return (
    <div className="wrapper">
      <h1>To-Do list</h1>
      <div className="createForm">
        <Input onChange={(event) => setText(event.target.value)} value={text} />
        <Button onClick={createTask} text="Press" />
      </div>
      {
        tasks.map((task) => <Task key={task.id} data={task} onChange={(id) => changeIsDone(id)} removeTodo={(id) => deleteTask(id)} />)
      }
    </div>
  );
}

export default App;
