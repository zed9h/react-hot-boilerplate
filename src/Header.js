import React, { Component } from 'react';
require('./Header.scss');

export default class Header extends Component {
  render() {
    return (
      <header><div id="logo" className="icon-logo-vivareal" /><div id="title">SPOTIPPOS - AN&Uacute;NCIOS</div></header>
    );
  }
}

