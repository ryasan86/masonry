import React, { Component, Fragment } from 'react';
import AppBar from './components/AppBar/AppBar';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar />
        <Main />
      </Fragment>
    );
  }
}

export default App;
