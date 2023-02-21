import styled from 'styled-components/native';
import { TextType } from '.'

export const StyleText = styled.Text<TextType>`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
`;
