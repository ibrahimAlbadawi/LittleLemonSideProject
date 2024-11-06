import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div id='button'>
      <h4 id='button-text'>{props.text}</h4>
    </div>
  )
}

export default Button
