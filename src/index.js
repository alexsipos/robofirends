import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line
import App from './Container/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
                  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

 
serviceWorker.unregister();
