// src/TaskCard.jsx

function TaskCard({ title, status }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>Status: <span className="status-badge">{status}</span></p>
    </div>
  )
}

export default TaskCard