import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  var headerStyles = {
    textAlign: 'center'
  }
  return(
    <div>
      <h1 style={headerStyles}>Help Queue!</h1>
      <p> <Link to='/'>Home</Link> | <Link to='/newticket'>Create New Ticket</Link></p>
    </div>
  );
}

export default Header;
