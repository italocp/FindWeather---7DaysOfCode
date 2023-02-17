import React from "react";
import { Container, Title } from "./styles";

type Props = {
  Text: string;
};

function Button({ Text }: Props) {
  return (
    <Container>
      <Title>{Text}</Title>
    </Container>
  );
}

export default Button;
