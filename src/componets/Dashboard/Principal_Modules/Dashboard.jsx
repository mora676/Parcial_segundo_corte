import React from "react";
import Navbar from './Navbar.jsx';
import Options from './Options.jsx';
import { Outlet } from "react-router-dom";

function Dashboard() {
  console.log('Dashboard cargado');
  return (
    <div className="dashboard-container">
      <header className="navbar">
        <Navbar />
      </header>

      <div className="dashboard-body">
        <aside className="sidebar">
          <Options />
        </aside>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;

