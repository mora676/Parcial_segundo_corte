import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import TaskDisplay from '../../components/Dashboard/Secondary_Modules/TaskDisplay.jsx'; // Importa el componente TaskDisplay

// Componente TaskFetcher que obtiene las tareas desde la API.
const TaskFetcher = () => {
  // Estado para almacenar las tareas obtenidas de la API.
  const [tasks, setTasks] = useState([]);
  
  // Estado para controlar el estado de carga.
  const [loading, setLoading] = useState(true);

  // Función asíncrona para obtener las tareas de la API.
  const getTasks = async () => {
    try {
      // Realiza la petición GET a la API.
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      // Actualiza el estado con los datos recibidos.
      setTasks(response.data);
      // Muestra un mensaje de éxito usando SweetAlert2.
      Swal.fire({
        icon: 'success',
        title: 'Conexión exitosa',
        text: '¡Tareas cargadas correctamente!',
        timer: 2000,
        showConfirmButton: false
      });
    } catch (error) {
      // En caso de error, muestra un mensaje de error con SweetAlert2.
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'No se pudieron obtener las tareas de la API.',
      });
    } finally {
      // Finaliza el estado de carga, ya sea en éxito o error.
      setLoading(false);
    }
  };

  // Se llama a getTasks cuando el componente se monta.
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        // Se pasa el array de tareas como propiedad al componente TaskDisplay.
        <TaskDisplay tasks={tasks} />
      )}
    </div>
  );
};

export default TaskFetcher;
