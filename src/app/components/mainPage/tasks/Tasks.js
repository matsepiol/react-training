import React from "react";
import TasksList from './tasksList/TasksList';

export default class Tasks extends React.PureComponent {
  render() {
    return (
      <div className='tasks col-md-6'>
        <div className='input-group col-lg-3 pull-right'>
          <input type='text' className='form-control' placeholder='Text input with button' />
          <div className='input-group-btn'>
            <button className='btn btn-default' type='button'>Add</button>
          </div>
        </div>
        <TasksList tasks={this.props.tasks} />
        {functionalComponent()}
      </div>
    );
  }
}

function functionalComponent(props) {
  return <p>Functional Component</p>;
}