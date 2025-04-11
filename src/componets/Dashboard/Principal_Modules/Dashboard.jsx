import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Menú</h2>
        <ul>
          <li><Link to="/tasks/pending">Tareas Pendientes</Link></li>
          <li><Link to="/tasks/completed">Tareas Completadas</Link></li>
          {/* Más enlaces de módulos si quieres */}
        </ul>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
