import { NavLink } from 'react-router-dom';

function Options() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="" className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="taskdisplay" className={({ isActive }) => isActive ? 'active' : ''}>
            Gestor de Tareas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Options;
