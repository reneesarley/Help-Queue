import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/confusedGuy.jpg';


function Header() {
  var headerStyles = {
    textAlign: 'center'
  };
  return(
    <div>
      <img src={logo} width='30%' height='30%'/>
      <h1 style={headerStyles}>Help Queue!</h1>
      <p> <Link to='/'>Home</Link> | <Link to='/newticket'>Create New Ticket</Link> | <Link to='/admin'>Admin</Link></p>
    </div>
  );
}

export default Header;
