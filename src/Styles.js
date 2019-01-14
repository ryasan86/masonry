import styled from 'styled-components';
import { Button } from './components/common';

const StyledAppBar = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.lightBorder};
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.color.dark};
  background: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => theme.lightBorder};
  &:hover {
    background: ${({ theme }) => theme.color.lightGray};
  }
`;

const StyledCard = styled.div`
  grid-row-end: span ${({ span }) => span};
`;

const StyledContent = styled.div``;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export { StyledAppBar, StyledButton, StyledCard, StyledContent, StyledImg };
