import React from "react";

require('./style.scss');

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <span className='title'>netflix roulette</span>
      </header>
    );
  }
}
