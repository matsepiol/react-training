import React from "react";

export default class AddCategory extends React.Component {
  render() {
    return (
      <div className='input-group col-lg-5'>
        <input type='text' className='form-control' placeholder='Enter category name' />
        <div className='input-group-btn'>
          <button className='btn btn-default' type='button'>Add</button>
        </div>
      </div>
    );
  }
}
