import React from "react";

import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import { Route, Switch } from 'react-router-dom';
import Movies from './movies/Movies';
import MovieDetails from './movieDetails/MovieDetails';
import MovieSearch from './movieSearch/MovieSearch';
import ErrorPage from '../404/404';

require('./style.css');

export default class MainPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    const store = this.props.store;
    return (
        <div className='main-page container'>
          <Search store = { store } />
          <InfoBar  store = { store } />

          <Switch>
            <Route exact path="/" component={Movies} store = { store } />
            <Route path="/movie/:id?" component={MovieDetails} />
            {/* <Route path="/search/:query?" component={ MovieSearch } /> */}
            <Route component={ErrorPage} />
          </Switch>
        </div>
    );
  }
}

