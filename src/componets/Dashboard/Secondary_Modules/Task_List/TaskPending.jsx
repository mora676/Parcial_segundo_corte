import React from 'react';

function TaskPending({ tasks }) {
  const { status } = useParams();  // Obtener el valor de status de la URL (completed, pending, all)

  let filteredTasks = [];

  console.log(filteredTasks);

  // // Filtrar las tareas según el estado
  // if (status === 'completed') {
  //   filteredTasks = tasks.filter(task => task.completed); // Solo tareas completadas
  // } else if (status === 'pending') {
  //   filteredTasks = tasks.filter(task => !task.completed); // Solo tareas pendientes
  // } else {
  //   filteredTasks = tasks; // Mostrar todas las tareas
  // }

  return (
    <div>
      <h2>Tareas pendiendtes</h2>
    </div>
  );
}

export default TaskPending;
