import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import styles from './style.css';

export default class MovieList extends React.Component {

  render() {
    let movie;

    if (this.props && this.props.movies) {
      movie = this.props.movies.map( (movie, i) => {
        const genres = (movie.genres) ? movie.genres.join(', ') : '';
        const year = (movie.release_date) ? movie.release_date.substring(0, 4) : '';
        return (
          <Link to={'/movie/' + movie.id } key={i}>
            <div className={styles.movie}>
              <img src={movie.poster_path} />
              <div>
                <p className='style-1c8e6' title={movie.title}>{movie.title}</p> 
                <p className='style-99139' title={genres}>{genres}</p>
                <p className='style-1d4cc'>{year}</p> 
              </div>
            </div>
          </Link>
        );
      })
    }
    return(
      <div className='style-b4502'>{movie}</div>
    )
  }
}

MovieList.propTypes = {  
  movies: PropTypes.array.isRequired
};
