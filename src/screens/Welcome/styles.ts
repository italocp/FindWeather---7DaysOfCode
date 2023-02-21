import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};

  padding-top: 137px;
`;

export const Title = styled.Text`
  margin-top: 57px;
  margin-bottom: 33px;
`;

export const Text2 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Overpass_400};
  font-size: 22px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;

  margin-bottom: 74px;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Overpass_700};
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray100};
  text-align: center;
`;

export const Title2 = styled.Text`
  color: ${({ theme }) => theme.colors.white} ;
  font-family: ${({ theme }) => theme.fonts.Overpass_400};
  font-size: 22px;
  font-weight: 400;
`;