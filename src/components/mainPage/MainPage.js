import React from "react";

import Movies from './movies/Movies';
import Search from './search/Search';
import InfoBar from './infoBar/InfoBar';
import MovieDetails from './movieDetails/MovieDetails';
import ErrorBoundry from './errorBoundry/ErrorBoundry';

require('./style.scss');

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = { tasks: null };
  }

  render() {
    return (
      <div className='main-page container'>

        <div className='row'>
            <Search />
        </div>

        { true === false &&
          <div className='row'>
              <MovieDetails />
          </div>
        }

        <div className='row'>
          <InfoBar />
        </div>

        <div className='row'>
          <Movies movies={this.state.movies} />
        </div>
      </div>
    );
  }
}


