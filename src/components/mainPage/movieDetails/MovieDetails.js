import React from "react";
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// require('./style.scss');

class MovieDetails extends React.Component {
  constructor() {
    super();
    this.state = { tasks: null };
  }

  render() {
    const movie = this.props.movies.filter((movie) => movie.id.toString() === this.props.match.params.id);
    return (
      <div className='movie-details container'>
        <p className='movie-title'>Title: {movie[0].title}</p>
        <p className='movie-year'>Release Date: {movie[0].release_date}</p>
        <p className='movie-description'>Overview: {movie[0].overview}</p>
        <img src={movie[0].poster_path} />
      </div>
    );
  }
}

MovieDetails.propTypes = {
  movies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MovieDetails);  
