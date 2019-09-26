import React, { Component } from 'react';
import { addTask } from "../../actions";
import { connect } from "react-redux";

//mapDispatchToProps lets you create functions that dispatch when called,
// and pass those functions as props to your component
const mapDispatchToProps = { addTask };


class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.createNewTask = this.createNewTask.bind(this);
  }
  componentDidMount(){
    document.getElementById("add-task--form").onsubmit = function() {createNewTask()};
  }
  createNewTask(e){
    e.preventDefault();
    console.log(`Submit button clicked --  addTask method`);
    //**test with static string
    this.props.addTask("New Task");
    this.props.toggleForm();
  }
  render(){
    return(
      <div className="add-task-form--container">
        <h4>Add Task Form</h4>
        <form id="add-task--form">
          <div className="add-task--description">
            <label htmlFor="task-description">Description: </label>
            <input type="text" name="task-description"/>
          </div>
          <div className="add-task--dueDate">
            <label htmlFor="task-dueDate">Due Date: </label>
            <input type="date" name="task-dueDate"/>
          </div>
          <div className="add-task--priority">
            <label htmlFor="task-priority">Priority: </label>
            <input type="radio" name="task-priority"/>High
            <input type="radio" name="task-priority" defaultChecked/>Low
          </div>
          <div className="add-task--buttons">
            <div className="add-task-buttons--submit">
              <button onClick={this.createNewTask}>Submit</button>
            </div>
            <div className="add-task-buttons--cancel">
              <button>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

//as the 2nd argument passed to connect, mapDispatchToProps is used for dispatching actions to the store
export default connect(null, mapDispatchToProps)(AddTaskForm);
