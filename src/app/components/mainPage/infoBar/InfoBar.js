import React from "react";
require('./style.scss');

export default class InfoBar extends React.PureComponent {
  render() {
    return (
      <div className="form-group info-bar">
        {movieCounterComponent()}
        {sortMovieComponent()}
      </div>
    )
  }
}

function movieCounterComponent(props) {
  return <span className="movie-counter">7 movies found</span>
}

function sortMovieComponent() {
  return (
    <div className="sort-movie">
      sort by:
    <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary btn-sm active">
          <input type="radio" name="options" id="option2" autoComplete="off" /> Title
      </label>
        <label className="btn btn-secondary btn-sm">
          <input type="radio" name="options" id="option2" autoComplete="off" /> Genre
      </label>
      </div>
    </div>
  )
}