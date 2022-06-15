import styled from 'styled-components';
import { Paragraph, Ul } from 'src/components/styled';

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 50px;
  }
`;

export const OrdersList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TotalPrice = styled(Paragraph)`
  font-size: 18px;
  font-weight: bold;
`;

export const EmptyText = styled(Paragraph)`
  font-size: 24px;
  margin-top: 50px;
`;
