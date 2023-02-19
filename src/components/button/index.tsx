import React from "react";
import { Container, Title } from "./styles";

type Props = {
  Text: string;
  onPress(): void;
};

function Button({ Text, onPress }: Props) {
  return (
    <Container onPress={onPress}>
      <Title>{Text}</Title>
    </Container>
  );
}

export default Button;
