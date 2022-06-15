import styled from 'styled-components';
import { Li, Paragraph } from 'src/components/styled';

export const OrderItemStyled = styled(Li)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.defaultWhite};

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    display: grid;
    grid-template-columns: 200px 3fr 2fr;
    border: none;
    padding: 0;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 170px;
  object-fit: cover;
  align-self: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const PriceText = styled(Paragraph)`
  font-size: 24px;
`;
