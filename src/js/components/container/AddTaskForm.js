import React, { Component } from 'react';
import { addTask } from "../../actions";
import { connect } from "react-redux";

//mapDispatchToProps lets you create functions that dispatch when called,
// and pass those functions as props to your component
const mapDispatchToProps = { addTask };


function TaskRadio(props){
  const radio = props.radioType;
  console.log(
    `
    Radio component
    `
  );
  /*
  <div className="add-task--priority">
    <label htmlFor="priority">Priority: </label>
    <input type="radio" name="priority" defaultChecked={this.state.priority} onChange={this.handleChange}/>High
    <input type="radio" name="priority" defaultChecked={!this.state.priority} onChange={this.handleChange}/>Low
  </div>
  */
  const radioOptions = radio.options.map(function(option, index){
    return (
      <div className={`add-task--${radio.name}`} key={`${radio.name}-${index}`}>
        <input type="radio" name={radio.name} defaultChecked={option.checked} onChange={props.handler} value={option.displayValue}/>{option.displayValue}
      </div>
    )
  });
  console.log(radioOptions);
  return(
    <div>
      <label htmlFor={radio.name}>{radio.label}</label>
      {radioOptions}
    </div>
  )
}

class AddTaskForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      taskName: '',
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
    let value = target.value;
    console.log(`handleChange() - name: ${name}, value: ${target.value}`);
    console.log(e);
    if(target.name==='done' || target.name==='priority'){
      if(target.value==='Yes' || target.value==='High'){
        console.log(`target.value is ${target.value}`);
        value = true;
      }else{
        console.log(`target.value is ${target.value}`);
        value = false;
      }
    }
    this.setState({
      [name]: value
    })
  }
  createNewTask(e){
    e.preventDefault();
    console.log(`Submit button clicked --  addTask method`);
    //**test with static string
    this.props.addTask(this.state);
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
      name: 'priority',
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
            <label htmlFor="taskName">Task Name: </label>
            <input type="text" name="taskName" value={this.state.taskName} onChange={this.handleChange}/>
          </div>
          <TaskRadio radioType={taskDone} handler={this.handleChange}/>
          <div className="add-task--dueDate">
            <label htmlFor="dueDate">Due Date: </label>
            <input type="date" name="dueDate" value={this.state.dueDate} onChange={this.handleChange}/>
          </div>
          <TaskRadio radioType={taskPriority} handler={this.handleChange}/>
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
