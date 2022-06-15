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
