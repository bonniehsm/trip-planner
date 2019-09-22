import React, { Component } from 'react';
import { connect } from "react-redux";

/**
Connect: extracting data with mapStateToProps
1. connect method
2. define mapStateToProps
  - should take a 1st argument: state, and optionally a 2nd argument: ownProps
  - return: plain object containing the data that the connected component needs
  - this function will be called from connect() everytime the state changes
    - if you do not wish to subscribe to the store, pass null or undefined to connect in place of mapStateToProps
**/

/**
 1st argument: entire Redux store state
**/
const mapStateToProps = state => {
  return { toDos: state.toDos };
}

function ViewToDosList(props){
  console.log(
    `
    ViewToDosList component
    ${props.list}
    `
  );
  return(
    <div>
      <h3>List</h3>
      <ul>
        {
          (props.list.length > 0) ?
            <ListItem items={props.list}/> : "You have nothing to do."
        }

      </ul>
    </div>
  );
}

function ListItem(props){
  const items = props.items;
  const listItems = items.map((item, index) => {
    return <li key={`todo--item-${index}`}>{ item }</li>
  });
  return listItems;
}


class ConnectedTripToDos extends Component{
  constructor(props){
    super(props);
    this.state = {
      addTaskFormVisibility: false
    }
    this.addToDo = this.addToDo.bind(this);
    //this.deleteToDo = this.deleteToDo.bind(this);
  }

  addToDo(e){
    e.preventDefault();
    console.log("Add Task form clicked");

    this.setState((state, props) => {
      return {addTaskFormVisibility: !state.addTaskFormVisibility}
    })
  }

  render(){
    console.log(this.props);
    console.log(this.state);
    const testItem = "test item";
    const testList = ["item 1", "item 2", "item 3", "item 4"];
    const addTaskForm = this.state.addTaskFormVisibility ? <AddTaskForm/> : null;
    return(
      <div>
        <h2>View TripToDos Component</h2>
        <div className="todo--list">
          <ViewToDosList list={this.props.toDos}/>
        </div>
        <button onClick={this.addToDo}>Add Task</button>
        { addTaskForm }
      </div>
    )
  }
}

function AddTaskForm(){
  return(
    <div>
      <h4>Add Task Form</h4>
      <form>
        <div className="add-task--description">
          <label for="task-description">Description: </label>
          <input type="text" name="task-description"/>
        </div>
        <div className="add-task--buttons">
          <div className="add-task-buttons--submit">
            <input type="submit" value="Submit"/>
          </div>
          <div className="add-task-buttons--cancel">
            <button>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  )
}

//as the first argument passed into connect, mapStateToPropsis used for selecting the part of the data from the store that
//  the connected component needs
const TripToDos = connect(mapStateToProps)(ConnectedTripToDos);

export default TripToDos;
