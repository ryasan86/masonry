import React, { Component } from 'react';
import styled from 'styled-components';
import imagesLoaded from 'imagesloaded';
import { ROW_HEIGHT, ROW_GAP } from './../constants';

class Card extends Component {
  state = { span: 0 };

  componentDidMount = () => {
    this.resizeGridCard();
    window.addEventListener('resize', this.resizeGridCard);
  };

  resizeGridCard = () => {
    imagesLoaded(this.content, () => {
      const contentHeight = this.content.getBoundingClientRect().height;
      const rowSpan = Math.ceil((contentHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));
      this.setState({ span: rowSpan });
    });
  };

  render = () => {
    const { post: { id, imgUrl } } = this.props;

    return (
      <StyledCard span={this.state.span}>
        <div ref={el => this.content = el}>
          <StyledImg src={imgUrl} alt={id} />
        </div>
      </StyledCard>
    );
  };
}

const StyledCard = styled.div`
  grid-row-end: span ${({ span }) => span};
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;


export default Card;
