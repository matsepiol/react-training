import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './movies/Movies';
import MovieDetails from './movieDetails/MovieDetails';

const Root = ({ store }) => (
    <Router>
      <Route path="/" component={Movies} store={store}>
        <Route path="film/:filter?" component={MovieDetails} store={store} />
      </Route>
    </Router>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;