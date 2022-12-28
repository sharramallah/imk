import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import Dashboard from "./pages/Dashboard";
import DetailTask3 from "./pages/DetailTask3";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Report from "./pages/Report";
import TaskDetail from "./pages/TaskDetail";
import TaskDetail2 from "./pages/TaskDetail2";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Navigate to={"/dashboard"} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/createtask" element={<CreateTask />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/taskdetail" element={<TaskDetail />} />
            <Route path="/taskdetail2" element={<TaskDetail2 />} />
            <Route path="/detailtask3" element={<DetailTask3 />} />
            <Route path="/report" element={<Report />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
