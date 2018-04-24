import React from "react";

require('./style.scss');

export default class TasksList extends React.Component {

  editTask() {
    console.log(this);
  }

  handleChange() {
    console.log(this);
    this.done = !this.done;
  }

  render() {
    let tasks;
    if(this.props && this.props.tasks) {
      tasks = this.props.tasks.map( (task, i) => {
        return (
          <div className='task' key={i}> 
            <label>
              <input type='checkbox' checked={task.done} onChange={this.handleChange.bind(task)} />
            </label>
            <span className='task-name'>{task.name}</span> 
            <i className='glyphicon glyphicon-edit pull-right' onClick={this.editTask.bind(task)}></i>
          </div>
        );
      })
    }
    return(
      <div className='tasks-wrapper col-lg-12'>{tasks}</div>
    )
  }
}


