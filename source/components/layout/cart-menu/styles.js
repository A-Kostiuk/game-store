import styled from 'styled-components';
import { Li, Paragraph, Ul } from 'src/components/styled';
import Button from 'src/components/ui/button/button';

export const StyledCartMenu = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  z-index: 1;
  width: 440px;
  padding: 20px;
  background-color: ${(props) => props.theme.colors.customBlack};
  border-radius: 15px;
`;

export const CartItemsList = styled(Ul)`
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.defaultWhite};
`;

export const TotalPrice = styled(Paragraph)`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const ButtonBuy = styled(Button)`
  font-size: 16px;
  padding: 10px 20px;
  font-weight: bold;
`;
