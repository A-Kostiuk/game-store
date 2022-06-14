import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.customBlue};
  padding: 5px 10px;
  border-radius: 27px;

  ${(props) => props.$isItemInCart ? css`
    background-color: ${(p) => p.theme.colors.customGrey};
  ` : null}
`;
