import React from 'react';
import './App.css'

function Demonym (props) {
  return (
    <div className="demonym">
      A {props.name} comes from {props.country}
    </div>
  )
}

export default Demonym