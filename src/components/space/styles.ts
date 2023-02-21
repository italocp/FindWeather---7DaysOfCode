import styled from 'styled-components/native';
import { Ispace } from '.'

export const Container = styled.View<Ispace>`
  margin-top: ${({ marginTop }) => marginTop || 10}px;
  margin-bottom: ${({ marginBottom }) => marginBottom || 10}px;
`;
