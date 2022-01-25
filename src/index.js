import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import {Register} from './components/pages/Register';
import {Login} from './components/pages/Login';
import Navbar from './components/Navbar';
import { AuthProvider } from './components/AuthProvider';
import { Authented } from './components/Authented';



ReactDOM.render(
    <Router>
        <AuthProvider>
            <Navbar />
            <Routes>
                <Route path='/register' element={ <Register /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/' element={<Authented><App /></Authented>} />
            </Routes>
        </AuthProvider>
    </Router>,
  
  document.getElementById('root')
);


