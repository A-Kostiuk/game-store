import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  min-height: ${(props) => props.theme.headerHeight};
  width: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.mobilePadding};

  @media (min-width: ${(props) => props.theme.tabletWidth}) {
    padding: 0 ${(props) => props.theme.tabletPadding} 0;
  }

  @media (min-width: ${(props) => props.theme.laptopWidth}) {
    padding: 0 ${(props) => props.theme.laptopPadding} 0;
  }

  @media (min-width: ${(props) => props.theme.desktopWidth}) {
    padding: 0;
    max-width: ${(props) => props.theme.desktopWidth};
  }
`;
