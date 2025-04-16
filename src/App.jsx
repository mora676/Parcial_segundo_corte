import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './componets/Dashboard/Principal_Modules/Dashboard.jsx';
import Home from './componets/Dashboard/Principal_Modules/Home.jsx';
import MainTask from './componets/Dashboard/Secondary_Modules/Task_List/MainTask.jsx';
// import TaskDisplay from './componets/Dashboard/Secondary_Modules/Task_List/TaskDisplay.jsx';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="MainTask" element={<MainTask />} /> {/* MainTask como componente principal */}
            {/* <Route path="completed" element={<TaskDisplay />} /> 
            <Route path="pending" element={<TaskDisplay />} />  
            <Route path="all" element={<TaskDisplay />} />       
          </Route> */}
        </Route>
        <Route path="*" element={<Navigate to="/Dashboard" />} />
      </Routes>
    </div>
  );
}

export default App;

