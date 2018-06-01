import React from "react";
import PropTypes from 'prop-types';

import MovieList from './movieList/MovieList';
require('./style.scss');

export default class Movies extends React.PureComponent {
  render() {
   
    return (
      <div>
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

function functionalComponent(props) {
  return <p>Functional Component</p>;
}

Movies.propTypes = {  
  movies: PropTypes.array.isRequired
};