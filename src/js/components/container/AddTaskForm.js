import React, { Component } from 'react';
import { addTask } from "../../actions";
import { connect } from "react-redux";

//mapDispatchToProps lets you create functions that dispatch when called,
// and pass those functions as props to your component
const mapDispatchToProps = { addTask };


function TaskRadio(){
  const radio = props.radioType;
  /*
  <div className="add-task--done">
    <label htmlFor="done">Completed? </label>
    <input type="radio" name="done" defaultChecked={this.state.done} onChange={this.handleChange}/>Yes
    <input type="radio" name="done" defaultChecked={!this.state.done} onChange={this.handleChange}/>No
  </div>
  */
  return(
    <div>
      <label htmlFor={radio.name}>{radio.label}</label>

    </div>
  )
}

class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      description: '',
      done: false,
      dueDate: '',
      priority: false,
    }
    this.createNewTask = this.createNewTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    const target = e.target;
    const name = target.name;
    console.log(`handleChange() - name: ${name}, value: ${target.value}`);
    this.setState({
      [name]: target.value
    })
  }
  createNewTask(e){
    e.preventDefault();
    console.log(`Submit button clicked --  addTask method`);
    //**test with static string
    this.props.addTask("New Task");
    this.props.toggleForm();
  }
  render(){
    const taskDone = {
      name: 'done',
      label: 'Completed?',
      options: [
        {displayValue: 'Yes', checked: this.state.done},
        {displayValue: 'No', checked: !this.state.done}
      ]
    };
    const taskPriority = {
      name: 'label',
      label: 'Priority:',
      options: [
        {displayValue: 'High', checked: this.state.priority},
        {displayValue: 'Low', checked: !this.state.priority}
      ]
    };
    return(
      <div className="add-task-form--container">
        <h4>Add Task Form</h4>
        <form id="add-task--form" onSubmit={this.createNewTask}>
          <div className="add-task--description">
            <label htmlFor="description">Description: </label>
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          </div>
          <TaskRadio radioType={taskDone}/>
          <div className="add-task--dueDate">
            <label htmlFor="dueDate">Due Date: </label>
            <input type="date" name="dueDate" value={this.state.dueDate} onChange={this.handleChange}/>
          </div>
          <div className="add-task--priority">
            <label htmlFor="priority">Priority: </label>
            <input type="radio" name="priority" defaultChecked={this.state.priority} onChange={this.handleChange}/>High
            <input type="radio" name="priority" defaultChecked={!this.state.priority} onChange={this.handleChange}/>Low
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
