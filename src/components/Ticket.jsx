import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var ticketStyles = {
    backgroundColor: '#add8e6',
    fontFamily: 'sans-serif',
    paddingTop: '20px',
    paddingLeft: '10px'
  };

  return (
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired
};

export default Ticket;
