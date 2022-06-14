import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLogo = styled(Link)`
  color: ${(props) => props.theme.colors.defaultWhite};
  font-size: 30px;
  line-height: 24px;
  font-weight: bold;
`;
