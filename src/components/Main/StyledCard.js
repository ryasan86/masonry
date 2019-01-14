import React, { Component } from 'react';
import styled from 'styled-components';

const rowHeight = 40;
const rowGap = 10;

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
    if (content) {
      const contentHeight = content.getBoundingClientRect().height;
      const rowSpan       = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
      this.setState({ span: rowSpan });
    }
  };

  render = () => {
    const { post: { id, imgUrl } } = this.props;

    return (
      <StyledCard span={this.state.span}>
        <StyledContent ref={`content${id}`} className="content">
          <StyledImg src={imgUrl} alt={id} name={id} />
          <div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </StyledContent>
      </StyledCard>
    );
  };
}

export default Card;
