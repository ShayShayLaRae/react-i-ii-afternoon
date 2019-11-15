import React, { Component } from 'react';
import './NavButtons.css';


export default class NavButtons extends Component {
    render() {
        return (
            <div className='navCont'>
                <button className='whitebtn' onClick={this.userIncrement}>
                    Next
                    </button>
                <div>
                    <button className='bluebtn'>Edit</button>
                    <button className='bluebtn'>Delete</button>
                    <button className='bluebtn'>New</button>
                </div>

                <button className='whitebtn' onClick={this.userDecrement}>
                    Previous
                    </button>
            </div>
        )
    }
}