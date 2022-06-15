import styled from 'styled-components';
import { visuallyHidden } from 'src/components/styled';

export const StyleTitle = styled.h1`
  line-height: 115%;
  font-weight: 700;
  max-width: ${(props) => (props.$maxWidth ? `${props.$maxWidth}px` : '100%')};
  margin: 0;
  margin-bottom: ${(props) =>
    props.$marginBottom ? `${props.$marginBottom}px` : 0};
  font-size: ${(props) => {
    switch (props.level) {
      case 1 :
        return '40px';
      case 2 :
        return '30px';
      case 3 :
        return '26px';
      case 4 :
        return '24px';
      case 5 :
        return '18px';
      default :
        return '14px';
    }
  }
};

  ${(props) => (props.$visuallyHidden ? visuallyHidden : null)}
`;
