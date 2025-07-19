import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import './styles/styles.css'
import './styles/header.css'
import './styles/landing.css'
import './styles/contacts.css'
import './styles/project.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

