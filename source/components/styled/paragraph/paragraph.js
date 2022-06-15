import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  margin-bottom: ${(props) => props.$marginBottom ? `${props.$marginBottom}px` : 0};
`;

export default Paragraph;
