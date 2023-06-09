import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as router} from 'react-router-dom'
import routes from './routes'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {routes}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
