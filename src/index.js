import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MoviesReducer from './reducers/Movies';

import { loadMovies } from './actions/moviesActions';


let store = createStore(MoviesReducer, applyMiddleware(thunk));
store.dispatch(loadMovies());


ReactDOM.render(
    <Provider store = { store }>
        <Layout store={ store } />
    </Provider>, 
    document.getElementById('app')
);

