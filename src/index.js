import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavbarComponent from './component/NavbarComponent';
import SidebarComponent from './component/SidebarComponent';
import FullpageComponent  from './component/FullpageComponent';
import ModelComponent from './component/ModelComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent /> 
    < SidebarComponent />
    <FullpageComponent />
    < ModelComponent />
  </React.StrictMode>
);
reportWebVitals();
