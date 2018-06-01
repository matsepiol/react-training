import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';  

import Movies from './movies/Movies';
import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import MovieDetails from './movieDetails/MovieDetails';
import ErrorBoundry from './errorBoundry/ErrorBoundry';
import { getState } from 'redux';

require('./style.scss');

class MainPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='main-page container'>

        <Search />

        {true === false &&
          <MovieDetails />
        }

        <InfoBar />

        {/* <ErrorBoundry> */}
        <Movies movies={this.props.movies} />
        {/* </ErrorBoundry> */}
      </div>
    );
  }
}

MainPage.propTypes = {  
  movies: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps)(MainPage);  

