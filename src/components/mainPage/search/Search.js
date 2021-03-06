import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { searchByNameAction } from '../../../actions/moviesActions';

require('./style.css');

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = { searchQuery: '', store: props.store };
    this.setSearchQuery = this.setSearchQuery.bind(this);
  }

  setSearchQuery(event) {
    this.setState({searchQuery: event.target.value, store: this.props.store });
  }

  render() {
    return (
      <div className="form-group search-bar">
        <p>Find your movie</p>
        <SearchInputComponent setSearchQuery={this.setSearchQuery} />
        <p>Search by:</p>
        <SearchFiltersComponent />
        <SearchSubmitButton searchQuery={this.state.searchQuery} store={this.state.store}/>

      </div>)
  }
}

function SearchInputComponent(props) {
  return <input type="text" className="form-control" onChange={props.setSearchQuery} placeholder="Search" />
}

function SearchFiltersComponent() {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-danger btn-sm active">
        <input type="radio" name="options" id="option2" autoComplete="off" /> Title
    </label>
      <label className="btn btn-danger btn-sm">
        <input type="radio" name="options" id="option2" autoComplete="off" /> Genre
    </label>
    </div>
  )
}

function SearchSubmitButton(props) {
  return (
      <button type="button" onClick={(e) => searchByName(e, props)} className="btn btn-danger btn-sm search-button">
        Search
      </button>
  )
}

function searchByName(e, props) {
  console.log(props);
  props.store.dispatch(searchByNameAction(props.searchQuery));
}

SearchSubmitButton.propTypes = {  
  searchQuery: PropTypes.string
};

SearchInputComponent.propTypes = {  
  setSearchQuery: PropTypes.func
};