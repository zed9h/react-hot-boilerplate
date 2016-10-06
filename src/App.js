import React, { Component } from 'react';
require('./App.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
        <Filters />
        <Listing />
      </div>
    );
  }
}


class Listing extends Component {
  render() {
    return (
      <section />
    );
  }
}

class Filters extends Component {
  render() {
    return (
      <aside />
    );
  }
}

class Menu extends Component {
  render() {
    return (
      <nav />
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header><div id="logo" /><div id="title">SPOTIPPOS - AN&Uacute;NCIOS</div></header>
    );
  }
}

