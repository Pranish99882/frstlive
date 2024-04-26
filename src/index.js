import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Demo from './Demo';
import TDL from './TDL';
import Prjct from './Prjct'

import { BrowserRouter,Route,Switch } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Prjct/>
  </BrowserRouter>
  </React.StrictMode>
);

