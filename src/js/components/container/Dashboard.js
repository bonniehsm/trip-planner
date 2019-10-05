import React, {Component} from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

const tripStyle = {
  border: '1px solid black',
  margin: '10px auto',
};

class Dashboard extends Component{
  constructor(props){
    super(props);
    this.renderTrips = this.renderTrips.bind(this);
    this.getDaysLeft = this.getDaysLeft.bind(this);
  }
  renderTrips(trip){
    console.log(`Dashboard component - renderTrips function`);
    console.log(trip);
    let todayDateTime = new Date();
    let daysLeft = this.getDaysLeft(trip.departureDateTime, todayDateTime);
    return(
      <div style={ tripStyle } key={trip.tripId}>
        <h2>{trip.destination}</h2>
        <h3>Departure Details</h3>
        <p>Days left: { daysLeft >= 0 ? daysLeft : "Trip Over"}</p>
        <p>Departure Date: {trip.departureDateTime.toString()}</p>
      </div>
    );
  }
  getDaysLeft(departureDateTime, todayDateTime){
    console.log(`getDaysLeft function`);
    var msPerDay = 24 * 60 * 60 * 1000;
    return Math.round((departureDateTime - todayDateTime)/msPerDay);
  }
  render(){
    console.log(`Dashboard render function`);
    console.log(this.props.trips);

    return(
      <div>
        <h1>Trips Dashboard</h1>
        {
          this.props.trips.length > 0 ? this.props.trips.map(trip => (this.renderTrips(trip))) : "No Trips Planned"
        }
      </div>
    )
  }

}
//subscribe to redux store updates
const mapStateToProps = ({trips}) => {
  return ({ trips });
};

export default connect(mapStateToProps, null)(Dashboard);
