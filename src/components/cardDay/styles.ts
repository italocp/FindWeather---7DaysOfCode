import styled from 'styled-components/native';

export const Container = styled.View`
  width: 338px;
  height: 76px;

  border-radius: 18px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray600};

  align-items: center;
  justify-content: space-evenly;

  flex-direction: row;

  padding: 6px;
`;

export const CardContainer = styled.View`

  align-items: center;
`;

export const Line = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray600};
  transform: rotate(90deg);
  width: 36px;
`