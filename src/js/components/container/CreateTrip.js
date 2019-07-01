import React, { Component } from 'react';

class CreateTrip extends Component {
  constructor(props){
    super(props);

    //initializing state
    this.state = {
      tripId: !this.props.tripId ? "" : this.props.tripId,
      destination: !this.props.destination ? "" : this.props.destination,
      departureAirportCode: !this.props.departureAirportCode? "" : this.props.departureAirportCode,
      departureDateTime: !this.props.departureDateTime ? "" : this.props.departureDateTime,
      destinationArrivalDateTime: !this.props.destinationArrivalDateTime? "" : this.props.destinationArrivalDateTime,
      returnAirportCode: !this.props.returnAirportCode? "" : this.props.returnAirportCode,
      returnDateTime: !this.props.returnDateTime? "" : this.props.returnDateTime,
      returnArrivalDateTime: !this.props.returnArrivalDateTime? "" : this.props.returnArrivalDateTime,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

    //function that handles updating the state on input change
    handleChange = (e) => {

    }

    handleSubmit = (e) => {

    }

    //calls parent function to close the form
    handleCancel = () => this.props.closeForm();


  render(){
    return(
      <div>
        <h1>Create Trip Component</h1>
      </div>
    )
  }
}

export default CreateTrip;
