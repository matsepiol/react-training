import React from "react";

import AddCategory from './addCategory/AddCategory';
import CategoryList from './categoryList/CategoryList';

export default class Categories extends React.PureComponent {
  render() {

    return (
      <div className='categories col-md-4'>
        <AddCategory />
        <CategoryList displayTasks={this.props.displayTasks}/>
      </div>
    );
  }
}
