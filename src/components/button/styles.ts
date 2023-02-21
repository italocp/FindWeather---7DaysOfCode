import styled from 'styled-components/native';
import { ButtonProps } from '.'

export const Buttons = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  border-width: ${({ borderColor }) => borderColor && 1}px;
  border-radius: ${({ borderRadius }) => borderRadius || 1}px;
  height: ${({ height }) => height || 10}px;
  width: ${({ width }) => width || 10}px;
  justify-content: center;
`;
