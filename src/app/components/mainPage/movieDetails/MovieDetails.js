import React from "react";

import Movies from './movies/Movies';
import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import ErrorBoundry from './errorBoundry/ErrorBoundry';

require('./style.scss');

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { tasks: null };
  }

  render() {
    if (this.props && this.props.movie) {
      const movie = this.props.movie;
      return (
        <div className='movie-details container'>
          <span className='movie-title'>{movie.title}</span>
          <span className='movie-rating'>{movie.rating}</span>
          <span className='movie-genre'>{movie.genre}</span>
          <span className='movie-year'>{movie.year}</span>
          <span className='movie-duration'>{movie.duration}</span>
          <span className='movie-description'>{movie.description}</span>
        </div>
      );
    }
  }
}

