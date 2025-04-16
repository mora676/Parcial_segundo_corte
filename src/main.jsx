import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; 
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Importación de Bootstrap

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
