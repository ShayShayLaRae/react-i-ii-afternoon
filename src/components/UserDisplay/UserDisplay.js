import React, { Component } from 'react';
import './UserDisplay.css';
let userList = require('../../Data').default;

export default class UserDisplay extends Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        }
    }

    userIncrement = () => {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
        console.log(this.state.currentIndex);
        
    }

    userDecrement = () => {
        this.setState({ currentIndex: this.state.currentIndex - 1 })
    }

    render() {
        const {currentIndex} = this.state
        const selectedUser = userList[currentIndex]
        const {id, name, city, country, title, employer, favoriteMovies} = selectedUser
        const {first, last} = name
        return (
            <div>
                <div>{first +' '+ last}</div>
                <div className='userInfo'>
                    <strong>From:</strong>
                     {`${city}, ${country}`}
                    <strong>Job Title:</strong>
                     {title}
                    <strong>Employer:</strong>
                     {employer}
                </div>
                <button onClick={this.userIncrement}>
                    Next
                </button>
                <button onClick={this.userDecrement}>
                    Previous
                </button>
            </div>
        )
    }
}