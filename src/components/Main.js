import React, { Component } from 'react';
import styled from 'styled-components';
import posts from './../data.json';
import { ROW_HEIGHT, ROW_GAP, sleep } from "./../constants";
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
