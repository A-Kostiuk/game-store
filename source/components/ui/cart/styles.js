import styled from 'styled-components';
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
  position: relative;
`;
