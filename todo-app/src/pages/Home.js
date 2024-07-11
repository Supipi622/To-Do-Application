import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import EditTask from "../components/EditTask";

const Home = () => {
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/addtask");
  // };
  return (
    <>
      <div className="home-container">
        
        <div className="content">
          <h1>Stay Organized and <br></br>Boost Productivity</h1>
          <p>
          Welcome to our To-Do List application! Designed to help you stay on top of your tasks, this app provides a simple and intuitive interface to manage your daily activities efficiently. Whether you're juggling work projects, personal errands, or planning your next big adventure, our To-Do List app ensures you never miss a deadline. Create, update, and track your tasks seamlessly to boost your productivity and achieve your goals with ease. Get started today and experience the power of organized living!
          </p>
          {/* <button onClick={handleClick}>Add Tacks</button> */}
        </div>
        <div className="image"> </div>
        <div className="another-background-image"></div>
      </div>

      <TaskList />
     
    </>
  );
};

export default Home;
