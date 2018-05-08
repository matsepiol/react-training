import React from "react";
import MovieList from './movieList/MovieList';

export default class Movies extends React.PureComponent {
  render() {
    return (
      <div>
        <MovieList tasks={this.props.tasks} />
      </div>
    );
  }
}

function functionalComponent(props) {
  return <p>Functional Component</p>;
}