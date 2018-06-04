import * as React from 'react';
import PropTypes from 'prop-types';

import Header from './header/Header';
import MainPage from './mainPage/MainPage';

export default class Layout extends React.Component {

  render() {
    const store = this.props.store;
    
    return (
      <div className="layout">
        <Header />
        <MainPage store = { store } />
      </div>
    );
  }
}