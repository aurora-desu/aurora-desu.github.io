import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx"

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18+

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);