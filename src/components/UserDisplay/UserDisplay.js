import React, { Component } from 'react';
import './UserDisplay.css';
let userList = require('../../Data').default;

export default class UserDisplay extends Component {
   

    render() {
        const {currentIndex} = this.props
        const selectedUser = userList[currentIndex]
        const {id, name, city, country, title, employer, favoriteMovies} = selectedUser
        const {first, last} = name
        return (
            <div className='userCont'>
            <div className="userDisplay">
                <div>
                    <div><strong>{first +' '+ last}</strong></div>
        <div><strong>{`${currentIndex + 1}/${userList.length}`}</strong></div>
                </div>
                    <hr/>
                    <div className='userInfo'>

                        <strong>From:</strong>
                        {`${city}, ${country}`}
                        <strong>Job Title:</strong>
                        {title}
                        <strong>Employer:</strong>
                        {employer}
                        <hr/>
                        <strong>Favorite Movies:</strong>
                        {favoriteMovies}
                    </div>
                   
                </div>
            </div>
  
        )
    }
}