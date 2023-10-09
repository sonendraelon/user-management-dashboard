// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route> 
        <Route path="/add" element={<AddUser />}></Route>
        <Route path="/edit/:id" element={<EditUser />}></Route>
        <Route path="/view/:id" element={<View />}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;