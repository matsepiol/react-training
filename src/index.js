import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';

import Layout from './components/Layout';
import { hot } from 'react-hot-loader';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MoviesReducer from './reducers/Movies';
import { BrowserRouter } from 'react-router-dom';

import { loadMovies } from './actions/moviesActions';

let store = createStore(MoviesReducer, applyMiddleware(thunk));
store.dispatch(loadMovies());

const Index = () => {
    <BrowserRouter>
        <Provider store={store}>
            <Layout store={store} />
        </Provider>
    </BrowserRouter>
}

export default hot(module)(Index);