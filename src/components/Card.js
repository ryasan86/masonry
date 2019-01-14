import React, { Component } from 'react';
import styled from 'styled-components';
import imagesLoaded from 'imagesloaded';
import { ROW_HEIGHT, ROW_GAP } from './../constants';

const StyledCard = styled.div`
  grid-row-end: span ${({ span }) => span};
`;

const StyledContent = styled.div``;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

class Card extends Component {
  state = {
    span: 0
  };

  componentDidMount = () => {
    this.resizeGridCard();
    window.addEventListener('resize', this.resizeGridCard);
  };

  resizeGridCard = () => {
    const content = this.refs[`content${this.props.post.id}`];
    imagesLoaded(content, () => {
      const contentHeight = content.getBoundingClientRect().height;
      const rowSpan = Math.ceil((contentHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));
      this.setState({ span: rowSpan });
    });
  };

  render = () => {
    const {
      post: { id, imgUrl }
    } = this.props;

    return (
      <StyledCard span={this.state.span}>
        <StyledContent ref={`content${id}`}>
          <StyledImg src={imgUrl} alt={id} />
          <div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </StyledContent>
      </StyledCard>
    );
  };
}

export default Card;
