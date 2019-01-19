import React, { Component } from 'react';
import styled from 'styled-components';
import { GH_LOGO } from '../images';
import { GITHUB_REPO_URL } from './../constants';
// components
import { Logo } from './common';

class AppBar extends Component {
  render = () => {
    return (
      <StyledAppBar>
        <p>React Masonry - resize me!</p>
        <a href={GITHUB_REPO_URL}>
          <Logo src={GH_LOGO} />
        </a>
      </StyledAppBar>
    );
  };
}

const StyledAppBar = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.lightBorder};
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default AppBar;
