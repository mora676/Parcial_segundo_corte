import { NavLink } from "react-router-dom";

function Options() {
  return (
    <div className="d-grid gap-2">
      <NavLink
        to=""
        className={({ isActive }) => `btn bt1 text-start ${isActive ? 'active' : ''}`}
      >
        Home
      </NavLink>
      <NavLink
        to="MainTask"
        className={({ isActive }) => `btn bt1 text-start ${isActive ? 'active' : ''}`}
      >
        Gestor de Tareas
      </NavLink>
    </div>
  );
}

export default Options;
