import React from "react";
require('./style.scss');

export default class CategoryList extends React.Component {

  componentWillMount() {
    let data = require('./mockup.json');
    this.setState(data);
  }

   handleClick(id, toggleCategory) {
     toggleCategory ? this.setState({activeId: null}) : this.setState({activeId: id});
    }

  render() {
     let nodes = this.state.categories.map( (category) => {
        return (
          <Node node = {category} key={category.id} activeId={this.state.activeId} children = {category.categories} displayTasks={this.props.displayTasks} onClick={this.handleClick.bind(this)} />
        );
      });

    return (
      <div className='list-group categories-wrapper'>
        {nodes}
      </div>
    );
  }
}

class Node extends React.Component {
  
  constructor() {
    super();
    this.state = { clicked: false };
  }

  // open category, if it has a nested sub-categories
  unfoldCategory(e) {
      e.stopPropagation();
      ( this.state.clicked === true ? this.setState({clicked: false}) : this.setState({clicked: true}) );
  }

  // click category to see its tasks
  clickCategory() {
    let toggleCategory = (this.props.node.id === this.props.activeId);

    this.props.onClick(this.props.node.id, toggleCategory);
    this.props.displayTasks(this.props.node.tasks, toggleCategory);
  }

  render() {         
    let childnodes = null;
    if (this.props.children) { 
      let { onClick, activeId, displayTasks } = this.props;
      childnodes = this.props.children.map( (childnode) => {
       return (
         <Node node = {childnode} key={childnode.id} activeId={activeId} children = {childnode.categories} displayTasks={displayTasks.bind(this)} onClick={onClick.bind(this)} />
       );
     });
    }
    
    return (
      <div>
        <a key={this.props.node.id} className = {'list-group-item ' + (this.props.activeId === this.props.node.id ? 'active' : '')} onClick={this.clickCategory.bind(this)}>
          { childnodes ? 
            <i data-toggle="collapse" data-target={'#item' + this.props.node.id} onClick={this.unfoldCategory.bind(this)} className={'collapsed glyphicon ' + (this.state.clicked ? 'glyphicon-chevron-down' : 'glyphicon-chevron-right')}></i> 
          : null }

          {this.props.node.name}
        </a>

        { childnodes ?
          <div id={'item' + this.props.node.id} className='list-group collapse sub-category'>{childnodes}</div>
        : null }

      </div>
    );
  }
}
