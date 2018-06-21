import React from "react";
require('./style.css');
import { sortByTitleAction, sortByGenreAction } from '../../../actions/moviesActions';

export default class InfoBar extends React.PureComponent {
  render() {

    return (
      <div className="form-group info-bar">
        {movieCounterComponent()}
        {sortMovieComponent(this.props)}
      </div>
    )
  }
}

function movieCounterComponent() {
  return <p className="movie-counter">7 movies found</p>
}

function sortByTitle(e, props) {
  props.store.dispatch(sortByTitleAction());
}

function sortByGenre(e, props) {
  props.store.dispatch(sortByGenreAction());
}

function sortMovieComponent(props) {
  return (
    <div className="sort-movie">
      <p>sort by:</p>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-secondary btn-sm active">
          <input type="radio" name="options" id="option2" onClick={(e) => sortByTitle(e, props)} autoComplete="off" /> Title
      </label>
        <label className="btn btn-secondary btn-sm">
          <input type="radio" name="options" id="option2" onClick={(e) => sortByGenre(e, props)} autoComplete="off" /> Genre
      </label>
      </div>
    </div>
  )
}