import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/style.scss';
import App from './App/App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);