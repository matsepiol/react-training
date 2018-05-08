import React from "react";
require('./style.scss');

export default class Search extends React.PureComponent {
  render() {
    return (
      <div className="form-group search-bar">
        <h1>Find your movie</h1>
        {searchInputComponent()}
        Search by:
      {searchFiltersComponent()}
        {searchSubmitButton()}
      </div>)
  }
}

function searchInputComponent() {
  return <input type="text" className="form-control" placeholder="Search" />
}

function searchFiltersComponent() {
  return (
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
      <label className="btn btn-secondary btn-sm active">
        <input type="radio" name="options" id="option2" autoComplete="off" /> Title
    </label>
      <label className="btn btn-secondary btn-sm">
        <input type="radio" name="options" id="option2" autoComplete="off" /> Genre
    </label>
    </div>
  )
}

function searchSubmitButton() {
  return <button type="button" className="btn btn-primary btn-sm search-button">Search</button>
}