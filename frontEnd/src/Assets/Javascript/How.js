import React, { Component } from 'react';
import '../Styles/How.scss';
import { Link } from 'react-router-dom';
export default class How extends Component {
  render() {
    return (
      <div>
        <Link to={'/start'}>
          <button className='home-button'>
            Home
          </button>  
        </Link>  
        <div className='how-title'>
          How to play
        </div>
        <div className='info'>
        Click the start button to start game! Type and enter as many words as you can before the timer runs out!
        </div>
        <div className='color'></div>
      </div>
    )
  }
}
