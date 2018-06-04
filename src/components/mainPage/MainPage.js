import React from "react";

import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './movies/Movies';
import MovieDetails from './movieDetails/MovieDetails';
import MovieSearch from './movieSearch/MovieSearch';
import ErrorPage from '../404/404';

require('./style.scss');

export default class MainPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div className='main-page container'>
          <Search />
          <InfoBar />

          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/movie/:id?" component={MovieDetails} />
            <Route path="/search/:query?" component={ MovieSearch } />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

