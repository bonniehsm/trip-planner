import React, { Component } from 'react';

class ViewDashboard extends Component {
  constructor(props){
    super(props);

    //OBJECT SHAPE
    this.state = {
      tripId: "",
      destination: "",
      departureAirportCode: "",
      departureDateTime: "",
      destinationArrivalDateTime: "",
      returnAirportCode: "",
      returnDateTime: "",
      returnArrivalDateTime: "",
    }

  }
  render(){
    return(
      <div>
        <h1>Create Trip Component</h1>
      </div>
    )
  }
}

export default ViewDashboard;
