import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter and alias it as Router

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Use Router here, which is actually HashRouter */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
