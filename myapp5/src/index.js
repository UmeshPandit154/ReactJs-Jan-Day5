//1. Import Area
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import someDefaultImport from somelocation/somelibrary
import MyComp1 from './components/MyComp1';
// import { someNamedImport } from somelocation/somelibrary


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComp1 />);

