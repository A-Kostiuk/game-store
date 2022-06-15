import styled from 'styled-components';
import { Li, Ul } from 'src/components/styled';

export const GamesListStyled = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: ${(props) => props.theme.laptopWidth}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;
