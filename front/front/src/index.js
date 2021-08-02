import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './views/routes/AppRouter';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

