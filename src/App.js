import React, { Component } from 'react';

import Header  from './Header';
import Menu    from './Menu';
import Filters from './Filters';
import Listing from './Listing';

require('./icon/style.css');
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

