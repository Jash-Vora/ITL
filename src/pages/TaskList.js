// TaskList.js

import React from 'react';
import '../App.css'

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  const getTaskClass = (task) => {
    let className = 'task';
    if (task.priority === 'High') className += ' high-priority';
    else if (task.priority === 'Medium') className += ' medium-priority';
    else if (task.priority === 'Low') className += ' low-priority';
    if (new Date(task.dueDate) < new Date()) className += ' overdue';
    return className;
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} className={getTaskClass(task)}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span>{task.title} - {task.category} - {task.dueDate} - {task.priority}</span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
