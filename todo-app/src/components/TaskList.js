import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/TaskList.css';
import axios from 'axios';
import config from '../config.json';
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TaskList = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${config.backEnd_server_url}/api/tasks`);
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${config.backEnd_server_url}/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId)); // Update state after deletion
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEdit = (taskId) => {
    navigate(`/edit/${taskId}`);
  };

  const handleDetailsClick = (taskId) => {
    navigate(`/tasks/${taskId}`);
  };

  const toggleCompleted = async (task) => {
    try {
      const updatedTask = { ...task, completed: !task.completed };
      await axios.put(`${config.backEnd_server_url}/api/tasks/${task._id}`, updatedTask);
      setTasks(tasks.map((t) => (t._id === task._id ? updatedTask : t)));
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  };

  const formatDate = (dateString) => {
    // Create a Date object from the dateString
    const dateObject = new Date(dateString);
    // Get the date part using toLocaleDateString() method
    return dateObject.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="app-container">
      <div className="task-list-container">
        <div className="taskheader">
          <h1>Task List</h1>
          <Link to="/addtask" className="add-task-link">Add New Task</Link>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div key={task._id} onClick={() => handleDetailsClick(task._id)} className="task-row">
              <div className="task-info">
                <h3>{task.title}</h3>
                <p>{formatDate(task.dueDate)}</p> {/* Render formatted date */}
              </div>
              <div className="task-status">
                <label className="toggle-checkbox">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) => {
                      e.stopPropagation();
                      toggleCompleted(task);
                    }}
                  />
                  <span></span>
                </label>
                <span className={task.completed ? 'status-completed' : 'status-pending'}>
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div className="task-actions">
                <button onClick={(e) => { e.stopPropagation(); handleEdit(task._id); }} className="edit-button">
                  <EditIcon />
                </button>
                <button onClick={(e) => { e.stopPropagation(); handleDelete(task._id); }} className="delete-button">
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
