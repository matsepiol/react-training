import React from "react";

import styles from './style.css';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <span className={styles.title}>netflix roulette</span>
      </header>
    );
  }
}
