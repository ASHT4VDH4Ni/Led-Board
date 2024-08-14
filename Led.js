import React from 'react';
import './LED.css'; // Create a CSS file for styling

const LED = ({ on }) => {
  return <div className={`led ${on ? 'on' : 'off'}`}></div>;
};

export default LED;
