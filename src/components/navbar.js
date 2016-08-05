import React from 'react';
import { Link } from 'react-router';


// function based "dumb" component with no state
const NavBar = () => {
  return (
    <div className="navbar">
      <div id="logo"><Link to="/">zuffr</Link></div>
      <div id="postButton"><Link to="/posts/new">post!</Link></div>
    </div>
  );
};


export default NavBar;
