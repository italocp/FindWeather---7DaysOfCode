import React from "react";
import { View } from "react-native";

import Text from "../text";
import theme from "../../theme/styles/Global/theme";
import { Container, TemperatureContainer } from "./styles";

function Temperature() {
  return (
    <Container>
      <TemperatureContainer>
        <Text
          color={theme.colors.white}
          fontFamily={theme.fonts.Overpass_700}
          fontWeight={700}
          fontSize={76}
          textAlign="center"
        >
          23
        </Text>
        <Text
          color={theme.colors.white}
          fontFamily={theme.fonts.Overpass_400}
          fontWeight={400}
          fontSize={30}
          textAlign="center"
          style={{ paddingBottom: 35 }}
        >
          º
        </Text>
      </TemperatureContainer>
      <Text
        color={theme.colors.gray100}
        fontFamily={theme.fonts.Overpass_400}
        fontWeight={400}
        fontSize={30}
        textAlign="center"
      >
        Chuva Moderada
      </Text>
    </Container>
  );
}

export default Temperature;
