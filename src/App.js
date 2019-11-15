import React, { Component } from 'react';
import './App.css';
import UserDisplay from './components/UserDisplay/UserDisplay';
import NavButtons from './components/NavButtons/NavButtons';
import Header from './components/Header/Header';
let userList = require('./Data').default;

export default class App extends Component {
  // console.log('userList is here', userList[0]);

  constructor() {
    super();
    this.state = {
      currentIndex: 0
    }
  }

  userIncrement = () => {
    let newIndex= this.state.currentIndex +1
    if (newIndex > userList.length - 1) {
      newIndex = userList.length - 1;
    }
    this.setState({ currentIndex: newIndex});
  }

  userDecrement = () => {
    let newIndex= this.state.currentIndex - 1
    if (newIndex < 0) {
      newIndex = 0
    }
    this.setState({ currentIndex: newIndex})
  }

  render() {
    const {currentIndex} = this.state
    return (
      <div className="App">
        <Header />
        <UserDisplay currentIndex={currentIndex}/>
        <NavButtons inc={this.userIncrement} dec={this.userDecrement}/>
      </div>
    );
  }


}

