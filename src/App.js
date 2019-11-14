import React from 'react';
import './App.css';
import UserDisplay from './components/UserDisplay/UserDisplay';
// let userList = require('./Data').default;

function App() {
  // console.log('userList is here', userList[0]);
  
  return (
    <div className="App">
      <UserDisplay />
    </div>
  );
}

export default App;
