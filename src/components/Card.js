import React, { Component } from 'react';
import { ROW_HEIGHT, ROW_GAP } from "./../constants";
import { StyledCard, StyledContent, StyledImg } from "./../Styles";

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
      const rowSpan       = Math.ceil((contentHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));
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
