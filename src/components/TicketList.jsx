import React from 'react';
import PropTypes from 'prop-types';
import Ticket from './Ticket';

function TicketList(props){

  var ticketListStyles = {
    backgroundColor: '#000080',
    fontFamily: 'sans-serif',
    padding: '20px'
  };

  return (
    <div style={ticketListStyles}>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array
};


export default TicketList;
