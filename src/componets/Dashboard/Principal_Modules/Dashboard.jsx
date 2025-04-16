import React from "react";
import Navbar from './Navbar.jsx';
import Options from './Options.jsx';
import { Outlet } from "react-router-dom";

function Dashboard() {
  console.log('Dashboard cargado');
  return (
    <div className="dashboard-container">
      <div className="box-header">
        <header className="navbar">
          <Navbar />
        </header>
      </div>

      <div className="box-body ">
          <div className="sidebar">
            <Options />
          </div>

          <div className="content">
            <Outlet />
          </div>
      </div>
    </div>


  );
}

export default Dashboard;

