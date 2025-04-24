import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom';  // Importa useParams para acceder a los parámetros de la ruta
// import TaskList from './TaskPending';
// import AddTaskModal from './AddTaskModal';

function MainTask() {
  // Apartado para el funcionamiento de las ventanas
  const [activeTab, setActiveTab] = useState('tab1');

  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);  // Estado para las tareas filtradas
  const [showModal, setShowModal] = useState(false);

  // Obtener el parámetro de la ruta (completadas, pendientes, todas)
  const { status } = useParams();

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => {
  //       setTasks(res.data);  // Cargar todas las tareas
  //     })
  //     .catch(() => {
  //       Swal.fire({
  //         icon: 'error',
  //         title: 'Error',
  //         text: 'No se pudieron cargar las tareas.',
  //       });
  //     });
  // }, []);


  // Función para agregar una tarea
  // function addTask(title) {
  //   const newTask = {
  //     id: tasks.length + 1,
  //     title: title,
  //     completed: false,
  //   };
  //   setTasks([newTask, ...tasks]);
  //   setShowModal(false);

  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Tarea agregada',
  //     text: `Se agregó "${title}" correctamente.`,
  //   });
  // }

  return (
    <div className='main-task'>
      <div className='main-task-options'>
        <button
          className={`tab-btn ${activeTab === 'active' ? 'desactive+' : ''}`}
          onClick={() => setActiveTab('tab1')}
        >
          Pestaña 1
        </button>
        <button className='tab-btn btn2'></button>
      </div>
      <div className='main-task-boxs'>
        <div className='main-task-container'>comtemidp</div>
      </div>
    </div>

  );
}

export default MainTask;

