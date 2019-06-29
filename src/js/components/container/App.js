import React, { Component } from "react";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewTripDetails from "./ViewTripDetails";
import TripToDos from "./TripToDos";

class App extends Component {


  render(){
    return(
      <Router>
        <div>
          <h1>App Component</h1>
          <Dashboard/>
          <Route path="/view" component = {ViewTripDetails}/>
          <Route path="/todos" component = {TripToDos}/>
        </div>
      </Router>
    );
  }
}

export default App;
