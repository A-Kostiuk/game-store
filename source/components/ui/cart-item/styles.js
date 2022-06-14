import styled from 'styled-components';
import { Li } from 'src/components/styled';

export const StyledCartItem = styled(Li)`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartItemPrice = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0;
  border: none;
  line-height: 0;
  background: rgba(0, 0, 0, 0);
`;
