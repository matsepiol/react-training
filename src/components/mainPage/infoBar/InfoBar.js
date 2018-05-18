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
  return <p className="movie-counter">7 movies found</p>
}

function sortMovieComponent() {
  return (
    <div className="sort-movie">
      <p>sort by:</p>
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