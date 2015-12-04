/**
 * Created by rondyck on 2015-11-20.
 */
import './main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

main();

function main() {

  const app = document.createElement('section');
  document.body.appendChild(app);
  ReactDOM.render(<App />, app);
}
