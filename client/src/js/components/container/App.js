import React, { Component } from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewTripDetails from "./ViewTripDetails";
import TripToDos from "./TripToDos";
import CreateTrip from "./CreateTrip";

class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <h1>App Component</h1>
          <Dashboard/>
          <p><Link to="createTrip">Create Trip</Link></p>
          <p><Link to="todos">To-Do's</Link></p>
          <Route path="/view/:id" component = {ViewTripDetails}/>
          <Route path="/todos" component = {TripToDos}/>
          <Route path="/createTrip" component = {CreateTrip}/>
        </div>
      </Router>
    );
  }
}

export default App;
