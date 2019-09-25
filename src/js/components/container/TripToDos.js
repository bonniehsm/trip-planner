import React, { Component } from 'react';
import { connect } from "react-redux";
import AddTaskForm from "../container/AddTaskForm";

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
  console.log(
    `
    TripToDos -- mapStateToProps --
    ${state.toDos}
    `
  );
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
  console.log(`You have a task-- ListItem component rendered`);
  const items = props.items;
  const listItems = items.map((item, index) => {
    return <li key={`todo--item-${index}`}><ListItemDetail details={item}/></li>
  });
  return listItems;
}

function ListItemDetail(props){
  const taskDetail = props.details;
  const date = new Date(taskDetail.dueDate);
  return(
    <div>
      <p>{taskDetail.taskName}</p>
      <p>{taskDetail.done == true ? "Done" : "Not Done"}</p>
      <p>Due: {date.toString()}</p>
      <p>Priority: {taskDetail.priority == true ? "High" : "Low"}</p>
    </div>
  )
}


class ConnectedTripToDos extends Component{
  constructor(props){
    super(props);
    this.state = {
      addTaskFormVisibility: false
    }
    this.addToDo = this.addToDo.bind(this);
    //this.deleteToDo = this.deleteToDo.bind(this);
    this.changeTaskFormVisibility = this.changeTaskFormVisibility.bind(this);
  }

  addToDo(e){
    e.preventDefault();
    console.log("Add Task form clicked");

    this.setState((state, props) => {
      return {addTaskFormVisibility: !state.addTaskFormVisibility}
    })
  }
  changeTaskFormVisibility(){
    this.setState((state,props)=>{
      return {addTaskFormVisibility: !state.addTaskFormVisibility}
    })
  }

  render(){
    console.log(
      `
      ConnectedTripToDos Component - props:
      ${this.props.toDos}
      `
    );

    //console.log(this.state);
    const testItem = "test item";
    const testList = ["item 1", "item 2", "item 3", "item 4"];
    const addTaskForm = this.state.addTaskFormVisibility ?
      <AddTaskForm toggleForm={this.changeTaskFormVisibility}/> :
      null;
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

//as the first argument passed into connect, mapStateToPropsis used for selecting the part of the data from the store that
//  the connected component needs
const TripToDos = connect(mapStateToProps)(ConnectedTripToDos);

export default TripToDos;
