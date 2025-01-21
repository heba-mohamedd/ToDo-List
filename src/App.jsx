import React, { useState } from 'react';
import { v4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {


  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');


  //Logic
  // addTask  , deleteTask , Edit , complete

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newInput = { id: v4(), name: newTask, completed: false }
      setTasks([...tasks, newInput]);
      setNewTask('');
    }
  }

  const deleteTask = (x) => {
    setTasks(tasks.filter((task) => task.id !== x));
  }

  // const toggleComplete = (id) => {
  //   setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  // }

  const handleComplete = (index) => {
    const newtasks = [...tasks];
    newtasks[index].completed = !newtasks[index].completed;
    setTasks(newtasks);
  }




  const clearAll = () => {
    setTasks([]);
  }






  return (
    <div>
      <header>TODO</header>

      <div className='to-do-container'>
        <div className='for-input-data input-group'>
          <input
            className="form-control"
            style={styles.input}
            type="text"
            value={newTask}
            placeholder='Add Task'
            onChange={(e) => {
              // console.log(e)
              setNewTask(e.target.value)
            }} />
          <button
            className='btn btn-outline-secondary'
            onClick={addTask}>Add</button>
        </div>

        <div className='for-show-data'>
          <ul>
            {tasks.map((task, index) => (
              <li key={task.id} className={task.completed ? "done" : ""}>
                <input type="checkbox"
                  className='m-1'
                  checked={task.completed}
                  onChange={() => handleComplete(index)} />
                {task.name}
                <button onClick={() => deleteTask(task.id)}>🗑️</button>
              </li>
            ))}
          </ul>
          <div onClick={clearAll}>⚠️ Clear Completted</div>
        </div>
      </div>
    </div>
  );
}


const styles = {
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "25px 0 0 25px",
    border: "1px solid #ccc",


  },


}

export default App;
