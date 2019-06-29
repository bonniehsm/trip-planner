import React, { Component } from 'react';
import { connect } from "react-redux"; 

const mapStateToProps = state => {
  return { toDos: state.todos };
}

class ConnectedTripToDos extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      </div>
    )
  }
}

const TripToDos = connect(mapStateToProps)(ConnectedTripToDos);

export default TripToDos;
