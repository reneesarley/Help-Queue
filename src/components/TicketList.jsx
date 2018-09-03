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
      {Object.keys(props.ticketList).map(function(ticketId){
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onTicketSelection={props.onTicketSelection}
          ticketId={ticket.id}
          key={ticket.id}/>;
      })}
    </div>
  );
}
TicketList.propTypes = {
  ticketList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func
};


export default TicketList;
