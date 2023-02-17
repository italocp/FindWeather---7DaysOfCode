import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 328px;
  height: 54px;
  background-color: ${({ theme }) => theme.colors.dark300};

  
  align-items: center;
  justify-content: center;

  border-radius: 18px;
  border-color: ${({ theme }) => theme.colors.gray300};
  border-width: 1px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white} ;
  font-family: ${({ theme }) => theme.fonts.Overpass_400};
  font-size: 22px;
  font-weight: 400;
`;
