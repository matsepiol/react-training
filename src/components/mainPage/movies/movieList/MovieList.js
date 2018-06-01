import React from "react";
import PropTypes from 'prop-types';

require('./style.scss');

export default class MovieList extends React.Component {

  render() {
    let movie;

    if (this.props && this.props.movies) {
      movie = this.props.movies.map( (movie, i) => {
        const genres = (movie.genres) ? movie.genres.join(', ') : '';
        const year = (movie.release_date) ? movie.release_date.substring(0, 4) : '';

        return (
          <div className='movie' key={i}>
            <img src={movie.poster_path} />
            <div className="movie-data">
              <p className='movie-name' title={movie.title}>{movie.title}</p> 
              <p className='movie-genres' title={genres}>{genres}</p>
              <p className='movie-year'>{year}</p> 
            </div>
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
