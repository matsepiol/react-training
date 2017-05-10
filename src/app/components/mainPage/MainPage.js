import React from "react";

import Categories from './categories/Categories';
import Tasks from './tasks/Tasks';

require('./style.scss');

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { tasks: null };
  }

  displayTasks(tasks, toggleCategory) {
    toggleCategory ? this.setState({tasks: null}) : this.setState({tasks: tasks});
  }

  render() {
    return (
      <div className='main-page container'>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
            60%
          </div>
        </div>
        <div className='row'>   
          <Categories displayTasks={this.displayTasks.bind(this)}/>
          <Tasks tasks={this.state.tasks}/>
        </div>
      </div>
    );
  }
}
