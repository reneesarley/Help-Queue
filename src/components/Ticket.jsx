import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

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
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>;

    if(props.currentRouterPath === '/admin'){
      return(
        <div onClick={()=> {alert('clicked on ticket belonging to ' + props.names);}}>{ticketInformation}</div>
      );
    } else {
      return (
        <div>
          {ticketInformation}
        </div>
      );
    }
}
// function displayTimeOpen(timeOpen){
//   return timeOpen.from(new Moment(), true);
// }

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string
};

export default Ticket;
