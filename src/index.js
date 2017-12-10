import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.body.style.overflow = "hidden";
setTimeout(() => {
  document.body.style.overflow = "scroll";
}, 4000);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
