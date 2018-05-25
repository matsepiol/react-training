import * as React from 'react';

import Header from './header/Header';
import MainPage from './mainPage/MainPage';
import { getState } from 'redux';

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
