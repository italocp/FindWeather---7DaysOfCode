import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.dark};

`;

export const LocationContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const TitleContainer = styled.View`
  align-items: flex-start;
`;

export const TodayAndNext7daysContainer = styled.View`
  width: 328px;
  flex-direction: row;
  justify-content:space-between;
`;