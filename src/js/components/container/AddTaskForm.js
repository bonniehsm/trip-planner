import React, { Component } from 'react';

class AddTaskForm extends Component {
  constructor(props){
    super(props)
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
              <button>Submit</button>
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
export default AddTaskForm;
