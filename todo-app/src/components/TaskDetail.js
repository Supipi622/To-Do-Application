import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import config from '../config.json';
import '../style/taskDetails.css'

const TaskDetails = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`${config.backEnd_server_url}/api/tasks/${taskId}`);
        setTask(response.data);
      } catch (error) {
        console.error('Error fetching task details:', error.message);
      }
    };

    fetchTask();
  }, [taskId]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="task-details-container">
      <h1>Task Details</h1>
      <div>
        <strong>Title:</strong> {task.title}
      </div>
      <div>
        <strong>Description:</strong> {task.description}
      </div>
      <div>
        <strong>Due Date:</strong> {task.dueDate}
      </div>
      <div>
        <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
      </div>
      <button onClick={() => navigate(`/edit/${taskId}`)}>Edit</button>
      {/* <Link to="/">Back to Task List</Link> */}
    </div>
  );
};

export default TaskDetails;
