import React, { Component } from 'react';
import { GH_LOGO } from '../images';
// components
import { Logo } from './common';
import { StyledAppBar } from './../Styles';

class AppBar extends Component {
  render = () => {
    return (
      <StyledAppBar>
        <p>React Masonry - resize me!</p>
        <a href="https://github.com/ryasan86/masonry">
          <Logo src={GH_LOGO} />
        </a>
      </StyledAppBar>
    );
  };
}

export default AppBar;
