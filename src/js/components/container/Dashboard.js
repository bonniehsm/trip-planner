import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

const tripStyle = {
  border: '1px solid black',
  margin: '10px auto',
};

const mapStateToProps = state => {
  return { trips: state.trips };
};

const ConnectedDashboard = ({trips}) => {
  return(
    <div>
      <h1>Trips Dashboard</h1>
      {trips.map(trip => (renderTrips(trip)))}
    </div>
  )
}

function renderTrips(trip){
  let todayDateTime = new Date();
  let daysLeft = getDaysLeft(trip.departureDateTime, todayDateTime);
  return(
    <div style={ tripStyle } key={trip.tripId}>
      <h2>{trip.destination}</h2>
      <h3>Departure Details</h3>
      <p>Days left: { daysLeft >= 0 ? daysLeft : "Trip Over"}</p>
      <p>Departure Date: {trip.departureDateTime.toString()}</p>
    </div>
  );
}

function getDaysLeft(departureDateTime, todayDateTime){
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((departureDateTime - todayDateTime)/msPerDay);
}

const Dashboard = connect(mapStateToProps)(ConnectedDashboard);

export default Dashboard;

//ReactDOM.render(<Dashboard/>, document.getElementById("dashboard"));
