import React from "react";

// require('./style.scss');

export default class MovieDetails extends React.Component {
  constructor() {
    super();
    this.state = { tasks: null };
    alert(0);
  }

  render() {
    let movie;
    if (this.props && this.props.movie) {
      movie = this.props.movie;
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

    return(
      <div className='movie-wrapper col-lg-12'>{movie}</div>
    )
  }
}

