import React from "react";

require('./style.scss');

export default class MovieList extends React.Component {


  handleChange() {
    console.log(this);
    this.done = !this.done;
  }

  render() {
    let movie;

    this.props = {
      movie: [{
        name: "Mock movie",
        genre: "unknown",
        year: 2002
      }]
    }

    if (this.props && this.props.movie) {
      movie = this.props.movie.map( (movie, i) => {
        return (
          <div className='movie' key={i}> 
            <p className='movie-name'>Name: {movie.title}</p> 
            <p className='movie-genre'>Genre: {movie.genre}</p> 
            <p className='movie-year'>Year: {movie.year}</p> 
          </div>
        );
      })
    }
    return(
      <div className='movie-wrapper col-lg-12'>{movie}</div>
    )
  }
}


