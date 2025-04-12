import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';  // Importa useParams para acceder a los parámetros de la ruta
import TaskList from './TaskList';
import AddTaskModal from './AddTaskModal';

function MainTask() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);  // Estado para las tareas filtradas
  const [showModal, setShowModal] = useState(false);

  // Obtener el parámetro de la ruta (completadas, pendientes, todas)
  const { status } = useParams();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {
        setTasks(res.data);  // Cargar todas las tareas
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron cargar las tareas.',
        });
      });
  }, []);

  // Filtrar las tareas según el estado
  useEffect(() => {
    switch (status) {
      case 'completed':
        setFilteredTasks(tasks.filter(task => task.completed === true)); // Tareas completadas
        break;
      case 'pending':
        setFilteredTasks(tasks.filter(task => task.completed === false)); // Tareas pendientes
        break;
      default:
        setFilteredTasks(tasks);  // Mostrar todas las tareas si no hay filtro
    }
  }, [tasks, status]);  // Se ejecuta cada vez que cambian las tareas o el estado de la ruta

  // Función para agregar una tarea
  function addTask(title) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setShowModal(false);
    Swal.fire({
      icon: 'success',
      title: 'Tarea agregada',
      text: `Se agregó "${title}" correctamente.`,
    });
  }

  return (
    <div className="main-task">
      {/* Filtros con enlaces para tareas completadas, pendientes o todas */}
      <div className="box-sub-1 d-flex justify-content-between">
        <Link
          to="/Dashboard/taskdisplay/completed"  // Ruta para tareas completadas
          className="filter-box p-3 text-center"
          style={{ backgroundColor: '#a8d0e6', textDecoration: 'none' }}
        >
          <i>Completadas</i>
        </Link>
        <Link
          to="/Dashboard/taskdisplay/pending"  // Ruta para tareas pendientes
          className="filter-box p-3 text-center"
          style={{ backgroundColor: '#f8b0b0', textDecoration: 'none' }}
        >
          <i>Pendientes</i>
        </Link>
        <Link
          to="/Dashboard/taskdisplay/all"  // Ruta para mostrar todas las tareas
          className="filter-box p-3 text-center"
          style={{ backgroundColor: '#d1e7f0', textDecoration: 'none' }}
        >
          <i>Todas</i>
        </Link>
        <div
          className="filter-box p-3 text-center"
          style={{ backgroundColor: '#a2c2f1', cursor: 'pointer' }}
          onClick={() => setShowModal(true)}  // Mostrar modal para agregar tarea
        >
          <i>Agregar Tarea</i>
        </div>
      </div>

      {/* Muestra las tareas filtradas */}
      <div className="box-sub-2">
        <h2>Gestión de Tareas</h2>
        <TaskList tasks={filteredTasks} /> {/* Renderiza solo las tareas filtradas */}
      </div>

      {/* Modal para agregar tarea */}
      <AddTaskModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAdd={addTask}
      />
    </div>
  );
}

export default MainTask;

