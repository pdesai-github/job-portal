import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfileWidget from './user/components/UserProfileWidget';
import LayoutMain from './layout/LayoutMain';
import NavBar from './nav/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Jobs from './jobs/Jobs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='jobs' element={<Jobs/>} ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
