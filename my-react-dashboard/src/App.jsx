import { useState } from 'react' 
import './App.css'
import TaskCard from './TaskCard'

function App() {
 
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React basics", status: "In Progress" },
    { id: 2, title: "Build a dashboard", status: "Not Started" }
  ])

  const [newTaskTitle, setNewTaskTitle] = useState("")

  const handleAddTask = (e) => {
    if (e) e.preventDefault(); // Prevents the browser from reloading the page!

    if (newTaskTitle.trim() === "") return

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      status: "Not Started"
    }

    setTasks([...tasks, newTask])
    setNewTaskTitle("")
  }

  return (
    <div className="app-container">
      <h1>My Project Dashboard</h1>

      {/* Input Form wrapped in a form tag */}
      <form className="add-task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task name..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        {/* Inside a form, this button automatically triggers onSubmit when clicked OR when Enter is pressed */}
        <button type="submit">Add Task</button>
      </form>

      {/* Rendering the list dynamically using .map() */}
      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} status={task.status} />
        ))}
      </div>
    </div>
  )
}

export default App