import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import { Route } from 'react-router-dom';

function Admin(props){
  console.log('the current route is ' + props.currentRouterPath);
  return(
    <div>
      <h2>Admin</h2>
      <TicketList ticketList = {props.ticketList} currentRouterPath = {props.currentRouterPath}/>

    </div>
  );
}

Admin.propTypes= {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
}

export default Admin;
