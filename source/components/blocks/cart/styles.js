import styled, { css } from 'styled-components';
import { BiCartAlt } from 'react-icons/bi';

export const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const TotalPrice = styled.span`
  font-size: 18px;
  margin-left: 15px;
  font-weight: bold;



`;

export const CartIcon = styled(BiCartAlt)`
  cursor: pointer;
`;

export const IconWrapper = styled.div`
   position: relative;

  ${(props) => props.$quantity > 0 ? css`
  &::after {
    content: '${(p) => p.$quantity}';
    font-size: 14px;
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
  }
  ` : null}
`;
