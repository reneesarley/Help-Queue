import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var ticketStyles = {
    backgroundColor: '#add8e6',
    fontFamily: 'sans-serif',
    paddingTop: '20px',
    paddingLeft: '10px'
  };

  const ticketInformation =
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;

  if(props.currentRouterPath === '/admin'){
    return(
      <div onClick={()=> {props.onTicketSelection(props.ticketId);}}>{ticketInformation}</div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  ticketId: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};

export default Ticket;
