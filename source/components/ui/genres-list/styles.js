import styled from 'styled-components';
import { Li, Ul } from 'src/components/styled';

export const List = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const GenreItem = styled(Li)`
  padding: 2px 10px;
  background-color: ${(props) => props.theme.colors.customGrey};
  border-radius: 3px;
`;
