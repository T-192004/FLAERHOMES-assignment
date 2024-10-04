// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';

ReactDOM.render(
  <Router>
    <LibraryProvider>
      <App />
    </LibraryProvider>
  </Router>,
  document.getElementById('root')
);
