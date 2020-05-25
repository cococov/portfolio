import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import { Root } from './components';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();