import Header from './components/Header';
import React, { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Homework',
      day: '12/14',
      reminder: true,
    },
    {
      id: 2,
      text: 'Cleaning',
      day: '12/16',
      reminder: false,
    }]);

    const onDelete = ( id ) => {
      setTasks(tasks.filter((task)=> task.id!==id))
    }

    const toggleReminder = ( id ) => {
      setTasks(tasks.map((task) => task.id === id ? 
                {...task, reminder: !task.reminder} : task))
    }

    const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000 + 5);

      const newTask = {id, ...task};
      setTasks([...tasks, newTask]); 
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && < AddTask onAdd={addTask}/>}
      {tasks.length>0 ? 
      (<Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder}/>) :
        ('No task to show.')
      }
    </div>
  );
}

export default App;
