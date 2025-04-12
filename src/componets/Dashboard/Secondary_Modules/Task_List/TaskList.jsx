import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map(function (task) {
        return (
          <li
            key={task.id}
            className={task.completed ? 'completed' : 'pending'}
            style={{
              backgroundColor: task.completed ? '#d4f7dc' : '#f7d4d4', // pastel green for completed, pastel red for pending
            }}
          >
            {task.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
