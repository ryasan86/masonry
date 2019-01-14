import React, { Component } from 'react';
import styled from 'styled-components';
import posts from './../data.json';
import { sleep } from './../constants';
import { ROW_GAP, ROW_HEIGHT } from './../constants';
// components
import Card from './Card';

const StyledMain = styled.div`
  padding: 2% 4% 2% 4%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: ${ROW_GAP}px;
  grid-auto-rows: ${ROW_HEIGHT}px;
`;

class Main extends Component {
  renderPosts = () => {
    return posts.map((post, i) => <Card key={i} post={post} />);
  };

  render = () => {
    return <StyledMain>{this.renderPosts()}</StyledMain>;
  };
}

export default Main;
