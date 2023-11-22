// Main component
import React from 'react';
import Navbar1 from './Navbar1';

const Main = (props) => { 
  return (
    <div>
      <Navbar1 />
      {props.child}
    </div>
  );
};

export default Main;
