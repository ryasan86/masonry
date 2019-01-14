import React, { Component } from 'react';
import { GH_LOGO } from './../../images';
// components
import { Logo } from '../common';
import { StyledAppBar } from './AppBarStyles';

class AppBar extends Component {
  render = () => {
    return (
      <StyledAppBar>
        <Logo src={GH_LOGO} />
      </StyledAppBar>
    );
  };
}
export default AppBar;
