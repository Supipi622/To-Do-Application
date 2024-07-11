import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Singup from "./pages/Singup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import AddTaskForm from "./components/AddTaskForm";
import EditTask from "./components/EditTask";


function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Singup" element={<Singup />} />
          <Route path="/tasks/:taskId" element={<TaskDetail />} />
          <Route path="/addtask" element={<AddTaskForm />} />
          <Route path="/edit/:taskId" element={<EditTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
