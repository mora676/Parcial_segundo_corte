import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './componets/Dashboard/Principal_Modules/Dashboard.jsx';
import TaskList from './componets/Dashboard/Secondary_Modules/TaskDisplay.jsx';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Dashboard />}>
            <Route path="tasks/:status" element={<TaskList />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
