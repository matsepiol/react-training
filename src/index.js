import React from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/Layout';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MoviesReducer from './reducers/Movies';

let store = createStore(MoviesReducer);

ReactDOM.render(
    <Provider store = { store }>
        <Layout store={ store } />
    </Provider>, 
    document.getElementById('app')
);

