import React from 'react';
import ReactDOM from 'react-dom';
import '/index.css'; // Import stylów
import App from './src/components/App'; // Import komponentu App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
