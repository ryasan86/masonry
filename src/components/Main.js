import React, { Component } from 'react';
import styled from 'styled-components';
import posts from './../data.json';
// import { resizeAllGridItems } from './utils';
import Card from './Card';

const rowHeight = 40;
const rowGap = 10;

const StyledMain = styled.div`
  padding: 2% 4% 2% 4%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: ${rowGap}px;
  grid-auto-rows: ${rowHeight}px;
`;

const sleep = (ms = 0) => new Promise(r => setTimeout(r, ms));

class Main extends Component {
  state = {
    loading: false
  };

  componentDidMount = () => {
    this.toggleLoading();
    sleep(750).then(this.toggleLoading); // simulate delay
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };

  renderPosts = () => {
    return posts.map((post, i) => <Card key={i} post={post} />);
  };

  render = () => {
    return (
      <StyledMain>
        {this.state.loading ? 'LOADING...' : this.renderPosts()}
      </StyledMain>
    );
  };
}

export default Main;
