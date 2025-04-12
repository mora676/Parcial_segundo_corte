// components/tasks/AddTaskModal.jsx
import React, { useState } from 'react';

function AddTaskModal(props) {
  const [title, setTitle] = useState('');

  function handleSubmit() {
    if (title.trim() === '') return;
    props.onAdd(title);
    setTitle('');
  }

  if (!props.isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>Agregar Nueva Tarea</h3>
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
        />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Agregar</button>
          <button onClick={props.onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
