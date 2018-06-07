import React from "react";

// require('./style.scss');

export default class MovieSearch extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <h1>Search: {this.props.match.params.query}</h1>
    )
  }
}

