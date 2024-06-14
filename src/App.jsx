import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Order from "./Pages/Order/Order";
import List from "./Pages/List/List";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddItem from "./Pages/AddItem/AddItem";
function App() {
  const url = "https://food-del-b.onrender.com";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<AddItem url={url} />} />
          <Route path="/order" element={<Order url={url} />} />
          <Route path="/list" element={<List url={url} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
