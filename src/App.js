import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState } from "react";

function App() {

  const [tasks, setTasks] = useState ([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Development Meeting',
        day: 'Feb 6th at 12:30pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Groceries',
        day: 'Feb 7th at 1:30pm',
        reminder: true,
    },
])

//Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000)+ 1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}

//Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} :task))
}

//Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !==id))
}




  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ) : ('No Tasks To Show') }
    </div>
  );
}



export default App;
