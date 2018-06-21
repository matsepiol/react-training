import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  
import MovieList from './movieList/MovieList';
import ErrorBoundry from '../errorBoundry/ErrorBoundry';

require('./style.scss');

class Movies extends React.PureComponent {

  constructor() {
    super();
  }

  
  render() {
    //const state = this.props.state.getState();
   
    return (
      <div>
        <ErrorBoundry>
          <MovieList movies={this.props.state.movies} />
        </ErrorBoundry>
        </div>
    );
  }
}

Movies.propTypes = {  
  movies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    state: state,
    movies: state.movies
  };
}

export default connect(mapStateToProps)(Movies);  