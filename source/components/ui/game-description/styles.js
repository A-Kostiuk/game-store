import styled from 'styled-components';
import { Paragraph } from 'src/components/styled';

export const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  padding-bottom: 80px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 170px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const GenresTitle = styled(Paragraph)`
  opacity: 0.3;
`;
