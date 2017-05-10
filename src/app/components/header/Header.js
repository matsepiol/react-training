import React from "react";

require('./style.scss');

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <span className='title'>To-Do List</span>
            <div className="form-group pull-right col-lg-2">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <div className='checkbox pull-right'>
          <label className='show-done-input' >
            <input type='checkbox' checked /> Show Done
          </label>  
        </div>    
      </header>
    );
  }
}
