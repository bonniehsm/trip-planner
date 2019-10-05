import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteTask } from "../../actions";
import AddTaskForm from "../container/AddTaskForm";

const mapDispatchToProps = { deleteTask };
const mapStateToProps = state => {
  console.log(
    `
    TripToDos -- mapStateToProps --
    ${state.toDos}
    `
  );
  return { toDos: state.toDos };
}

function TasksList(props){
  console.log(
    `
    TasksList component
    ${props.list}
    `
  );
  return(
    <div>
      <h3>List</h3>
      <ul>
        {
          (props.list.length > 0) ?
            <ListItem items={props.list}  modifyHandler={props.modifyButtonHandler}/> : "You have nothing to do."
        }
      </ul>
    </div>
  );
}

function ListItem(props){
  console.log(`You have a task-- ListItem component rendered`);
  const items = props.items;

  const listItems = items.map((item, index) => {
    return(
      <li key={`todo--item-${index}`}>
        <ListItemDetail details={item} modifyHandler={props.modifyHandler}/>

      </li>
    )
  });
  return listItems;
}

function ListItemDetail(props){
  const taskDetail = props.details;
  const date = new Date(taskDetail.dueDate);  //
  return(
    <div>
      <p>{taskDetail.taskName}</p>
      <p>{taskDetail.done == true ? "Done" : "Not Done"}</p>
      <p>Due: {taskDetail.dueDate}</p>
      <p>Priority: {taskDetail.priority == true ? "High" : "Low"}</p>
      <button onClick={props.modifyHandler(taskDetail.taskName)}>Delete</button>
    </div>
  )
}

class TripToDos extends Component{
  constructor(props){
    super(props);
    this.state = {
      addTaskFormVisibility: false,
    }
    this.addToDo = this.addToDo.bind(this);
    this.deleteTaskHandler = this.deleteTaskHandler.bind(this);
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
  deleteTaskHandler(taskName){

    console.log(
      `
      TripToDos Delete Task Handler
      `
    );
    //this.props.deleteTask(taskName);
  }
  render(){
    console.log(
      `
      ConnectedTripToDos Component - props:
      ${this.props.toDos}
      `
    );
    //console.log(this.state);
    const addTaskForm = this.state.addTaskFormVisibility ?
      <AddTaskForm toggleForm={this.changeTaskFormVisibility}/> :
      null;
    return(
      <div>
        <h2>View TripToDos Component</h2>
        <div className="todo--list">
          <TasksList list={this.props.toDos} modifyButtonHandler={this.deleteTaskHandler}/>
        </div>
        <button onClick={this.addToDo}>Add Task</button>
        { addTaskForm }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripToDos);
