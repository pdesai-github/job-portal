import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfileWidget from './user/components/UserProfileWidget';
import LayoutMain from './layout/LayoutMain';

function App() {
  return (
    <div className="App">
      <nav></nav>
      <main>
      <LayoutMain></LayoutMain>
      </main>
      
    </div>
  );
}

export default App;
