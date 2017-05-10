import React from 'react';

import Header from './header/Header';
import MainPage from './mainPage/MainPage';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainPage />
      </div>
    );
  }
}
