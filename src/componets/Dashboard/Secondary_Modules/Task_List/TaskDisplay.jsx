import React from 'react';
import { useParams } from 'react-router-dom';
import TaskList from './TaskList';

function TaskDisplay({ tasks }) {
  const { status } = useParams();  // Obtener el valor de status de la URL (completed, pending, all)

  let filteredTasks = [];

  // Filtrar las tareas según el estado
  if (status === 'completed') {
    filteredTasks = tasks.filter(task => task.completed); // Solo tareas completadas
  } else if (status === 'pending') {
    filteredTasks = tasks.filter(task => !task.completed); // Solo tareas pendientes
  } else {
    filteredTasks = tasks; // Mostrar todas las tareas
  }

  return (
    <div>
      <h2>Tareas {status.charAt(0).toUpperCase() + status.slice(1)}</h2>
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default TaskDisplay;
