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
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onTicketSelection={props.onTicketSelection}
          key={ticket.id}/>
      )}
    </div>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};


export default TicketList;
