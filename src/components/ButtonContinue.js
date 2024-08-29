import React, { Component } from 'react'
import './../styles/Buttton.css'

export class ButtonContinue extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className='centerContainer'>
        <button className='buttonContinue' type='submit'>{text}</button>
      </div>
    )
  }
}

export default ButtonContinue