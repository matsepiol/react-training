import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';

import Layout from './components/Layout';
import { hot } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MoviesReducer from './reducers/Movies';

import PropTypes from 'prop-types';

import { loadMovies } from './actions/moviesActions';

let store = createStore(MoviesReducer, applyMiddleware(thunk));
store.dispatch(loadMovies());

const Index = ({ Router, location, context}) => (
    <Router location={location} context={context}>
        <Provider store={store}>
            <Layout store={store} />
        </Provider>
    </Router>
);

Index.propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
};
Index.defaultProps = {
    location: null,
    context: null,
};

export default hot(module)(Index);