import styled from 'styled-components';
import { Button } from '../common';

const StyledAppBar = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.lightBorder};
  padding: 10px;
  display: flex;
  justify-content: flex-end;
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

export { StyledAppBar, StyledButton };
