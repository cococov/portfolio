import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { App } from './views';
import * as serviceWorker from './serviceWorker';
import './static/css/index.css';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();