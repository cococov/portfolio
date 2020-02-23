import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import Root from './components/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.unregister();