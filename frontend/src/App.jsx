import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Res from './components/Res';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
{/*       <Route path='/' element={<Home/>}></Route> */}
      <Route path='/' Component={Home}></Route>
      <Route path='/login' Component={Login}></Route>
{/*       <Route path='/login' element={<Login/>}></Route> */}
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/res' element={<Res/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
