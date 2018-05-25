import React from "react";

require('./style.scss');

export default class MovieList extends React.Component {

  componentDidMount() {
    fetch('http://react-cdp-api.herokuapp.com/movies')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        this.setState({
          isLoaded: true,
          movies: result.data
        });
      },
    )
  }

  render() {
    let movie;

    if (this.state && this.state.movies) {
      console.log(this.state);
      movie = this.state.movies.map( (movie, i) => {
        return (
          <div className='movie' key={i}> 
            <p className='movie-name'>Name: {movie.title}</p> 
            <p className='movie-genre'>Genre: {movie.genre}</p> 
          </div>
        );
      })
    }
    return(
      <div className="movies-container">{movie}</div>
    )
  }
}


