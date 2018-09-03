import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      masterTicketList: []
    };

    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.waitTimeUpdateTimer = setInterval(() =>     this.updateTicketElapsedWaitTime(), 60000
    );
  }

  compnentWillUnmount(){
    console.log('compnentWillUnmount')
    clearInterval(this.waitTimeUpdateTimer);
  }
  
  updateTicketElapsedWaitTime(){
    console.log("check");
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach((ticket)=> ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
  );
  this.setState({masterTicketList: newMasterTicketList})
  }

  handleAddingNewTicketToList(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  render (){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
