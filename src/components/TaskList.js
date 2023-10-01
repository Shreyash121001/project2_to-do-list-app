import React, { useState, useEffect } from 'react';

const TaskList = ({ currentUser }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ dueDate: '', description: '', priority: '' });

  useEffect(() => {
    // Retrieve tasks from local storage for the current user
    const userTasks = JSON.parse(localStorage.getItem(currentUser)) || [];
    setTasks(userTasks);
  }, [currentUser]);

  const handleAddTask = () => {
    // Add a new task to the user's task list
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem(currentUser, JSON.stringify(updatedTasks));
    setNewTask({ dueDate: '', description: '', priority: '' });
  };

  return (
    <div>
      <h3>Task List for {currentUser}</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.description}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Due Date"
        value={newTask.dueDate}
        onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
      />
      <input
        type="text"
        placeholder="Priority"
        value={newTask.priority}
        onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskList;
