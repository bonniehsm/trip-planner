import React, { Component } from 'react';
import { addTask } from "../../actions";
import { connect } from "react-redux";

//mapDispatchToProps lets you create functions that dispatch when called,
// and pass those functions as props to your component
const mapDispatchToProps = { addTask };


class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.addTask = this.addTask.bind(this);
  }
  addTask(e){
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
        <form>
          <div className="add-task--description">
            <label htmlFor="task-description">Description: </label>
            <input type="text" name="task-description"/>
          </div>
          <div className="add-task--buttons">
            <div className="add-task-buttons--submit">
              <button onClick={this.addTask}>Submit</button>
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
