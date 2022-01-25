import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import {Register} from './components/pages/Register';
import Login from './components/pages/Login';
import Navbar from './components/Navbar';



ReactDOM.render(
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={ <App /> } />
      <Route path='/register' element={ <Register /> } />
      <Route path='/login' element={ <Login /> } />
    </Routes>
  </Router>,
  document.getElementById('root')
);


