import styled from 'styled-components/native';

export const Container = styled.View`
  width: 360px;
  height: 95px;
  flex-direction: row;
  justify-content: space-around;
`;

export const HourContainer = styled.View`
  width: 68px;
  height: 90px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.dark300};

  border-width: 1px;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.colors.dark100};

  padding: 4px;
`;

export const TemperatureContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;