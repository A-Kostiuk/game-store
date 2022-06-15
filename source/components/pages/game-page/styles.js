import styled from 'styled-components';

export const Video = styled.iframe`
  border: none;
  width: 100%;
  height: 400px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media(min-width: ${(props) => props.theme.tabletWidth}) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
  }

  @media(min-width: ${(props) => props.theme.laptopWidth}) {
    gap: 40px;
  }
`;
