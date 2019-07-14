import React, { Component } from 'react';
import { createTrip } from "../../../js/actions";
import { connect } from "react-redux";

const mapDispatchToProps = { createTrip }

class CreateTrip extends Component {
  constructor(props){
    super(props);

    //initializing state
    this.state = {
      //**TBD - Use this component to add AND edit trip?
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
    console.log(e);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    console.log(`Value: ${value}    Name: ${name}`);
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    console.log(`handleSubmit function`);
    e.preventDefault();
    console.log(this.state);
    this.props.createTrip(this.state);
  }

  //calls parent function to close the form
  handleCancel = (e) => {
    e.preventDefault();
    this.props.closeForm();
  }


  render(){
    console.log(this.state);
    return(
      <div>
        <h1>Create Trip Component</h1>
        <form>
          <div>
            Trip ID: <input name="tripId" value={this.state.tripId} onChange={this.handleChange} name="tripId"/>
          </div>
          <div>
            Destination: <input value={this.state.destination} onChange={this.handleChange} name="destination"/>
          </div>
          <div>
            Destination Airport Code:
            <input value={this.state.departureAirportCode} onChange={this.handleChange} name="departureAirportCode"/>
          </div>
          <div>
            Departure DateTime:
            <input value={this.state.departureDateTime} onChange={this.handleChange} name="departureDateTime"/>
          </div>
          <div>
            Destination Arrival DateTime:
            <input value={this.state.destinationArrivalDateTime} onChange={this.handleChange} name="destinationArrivalDateTime"/>
          </div>
          <div>
            Return Airport Code:
            <input value={this.state.returnAirportCode} onChange={this.handleChange} name="returnAirportCode"/>
          </div>
          <div>
            Return DateTime:
            <input value={this.state.returnDateTime} onChange={this.handleChange} name="returnDateTime"/>
          </div>
          <div>
            Return Arrival DateTime:
            <input value={this.state.returnArrivalDateTime} onChange={this.handleChange} name="returnArrivalDateTime"/>
          </div>
          <div className="formOperations">
            <button onClick={this.handleSubmit}>Submit</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(CreateTrip);
