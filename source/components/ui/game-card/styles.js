import styled from 'styled-components';
import { Li } from 'src/components/styled';

export const GameCardStyled = styled(Li)`
  position: relative;
  min-height: 300px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 170px;
  object-fit: cover;
`;

export const Description = styled.div`
  padding: 20px 20px 80px;
`;

export const Title = styled.h2`
  font-size: 20px;
  margin: 0 0 20px;
`;

