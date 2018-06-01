import React from "react";
import PropTypes from 'prop-types';

require('./style.scss');

export default class MovieList extends React.Component {

  render() {
    let movie;

    if (this.props && this.props.movies) {
      movie = this.props.movies.map( (movie, i) => {
        return (
          <div className='movie' key={i}> 
            <p className='movie-name'>Name: {movie.title}</p> 
            <p className='movie-genre'>Genre: {movie.genre}</p> 
          </div>
        );
      })
    }
    return(
      <div className="movies-container">{movie}</div>
    )
  }
}

MovieList.propTypes = {  
  movies: PropTypes.array.isRequired
};
