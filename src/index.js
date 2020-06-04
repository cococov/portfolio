import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components';
import * as serviceWorker from './serviceWorker';
import './static/css/index.css';

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();