import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};

`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Overpass_600};
  font-size: 33px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  margin-top: 57px;
  margin-bottom: 33px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Overpass_400};
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;

  margin-bottom: 74px;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Overpass_600};
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
`;

