import React from "react";

import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import { Switch, Route } from 'react-router-dom';
import Movies from './movies/Movies';
import MovieDetails from './movieDetails/MovieDetails';

require('./style.scss');

export default class MainPage extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='main-page container'>
        <Search />
        <InfoBar />
        
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/film/:id?" component={MovieDetails} />
        </Switch>
      </div>
    );
  }
}

