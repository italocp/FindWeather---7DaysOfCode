import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Overpass_700};
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
`;