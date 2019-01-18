import React, { Component } from 'react';
import styled from 'styled-components';
import posts from './../data.json';
import { ROW_GAP, ROW_HEIGHT } from './../constants';
// components
import Card from './Card';

class Main extends Component {
  renderPosts = () => {
    return posts.map((post, i) => <Card key={i} post={post} />);
  };

  render = () => {
    return <StyledMain>{this.renderPosts()}</StyledMain>;
  };
}

const StyledMain = styled.div`
  padding: 2% 4% 2% 4%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: ${ROW_GAP}px;
  grid-auto-rows: ${ROW_HEIGHT}px;
`;

export default Main;
