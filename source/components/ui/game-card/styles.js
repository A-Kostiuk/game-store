import styled from 'styled-components';
import { Li, Ul } from 'src/components/styled';

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 20px 20px 80px;
`;

export const GenresList = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GenrItem = styled(Li)`
  padding: 2px 10px;
  background-color: ${(props) => props.theme.colors.customGrey};
  border-radius: 3px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 20px;
`;

export const GamePrice = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const PriceText = styled.span``;

export const CardButton = styled.button`
  font-family: inherit;
  font-size: 16px;
  color: inherit;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.customBlue};
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 27px;
`;
