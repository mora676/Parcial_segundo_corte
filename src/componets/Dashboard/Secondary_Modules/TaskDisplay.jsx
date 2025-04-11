import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  // Obtener tareas desde la API
  const getTasks = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setTasks(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Conexión exitosa',
        text: '¡Tareas cargadas correctamente!',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudieron obtener las tareas de la API.',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  // Filtrar tareas por texto
  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [tasks, filter]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <input
            type="text"
            placeholder="Filtrar tareas..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />
          <ul className="list-disc pl-5">
            {filteredTasks.map(task => (
              <li key={task.id}>
                {task.title} - 
                <span className={task.completed ? 'text-green-600' : 'text-red-600'}>
                  {task.completed ? ' Completado' : ' Pendiente'}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TaskManager;
