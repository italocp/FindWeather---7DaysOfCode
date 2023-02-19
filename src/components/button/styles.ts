import styled from 'styled-components/native';
import { ButtonProps } from '.'

export const Buttons = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderColor }) => borderColor && 1}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  justify-content: center;
`;
