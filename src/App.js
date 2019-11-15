import React from 'react';
import './App.css';
import UserDisplay from './components/UserDisplay/UserDisplay';
import NavButtons from './components/NavButtons/NavButtons';
import Header from './components/Header/Header';
// let userList = require('./Data').default;

function App() {
  // console.log('userList is here', userList[0]);
  
  return (
    <div className="App">
      <Header />
      <UserDisplay />
      <NavButtons />
    </div>
  );
}

export default App;
