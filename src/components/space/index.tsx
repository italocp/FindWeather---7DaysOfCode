import React from "react";
import { ViewProps } from "react-native";

export interface Ispace extends ViewProps {
  marginTop?: number;
  marginBottom?: number;
}

import { Container } from "./styles";

function Space({ marginBottom, marginTop }: Ispace) {
  return <Container marginBottom={marginBottom} marginTop={marginTop} />;
}

export default Space;
