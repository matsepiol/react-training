import React from "react";
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