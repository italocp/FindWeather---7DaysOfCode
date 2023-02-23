import React from "react";
import { View, Image } from "react-native";
import theme from "../../theme/styles/Global/theme";
import Text from "../text";

import CloudRain from "../../assets/CloudRaining.png";

import { Container, HourContainer, TemperatureContainer } from "./styles";

function CardHours() {
  return (
    <Container>
      <HourContainer>
        <TemperatureContainer>
          <Text
            color={theme.colors.white}
            fontFamily={theme.fonts.Overpass_700}
            fontWeight={700}
            fontSize={18}
            textAlign="center"
          >
            23
          </Text>
          <Text
            color={theme.colors.white}
            fontFamily={theme.fonts.Overpass_400}
            fontWeight={400}
            fontSize={12}
            textAlign="center"
            style={{ paddingBottom: 10 }}
          >
            º
          </Text>
        </TemperatureContainer>
        <Image source={CloudRain} style={{ marginBottom: 9 }} />
        <Text
          color={theme.colors.gray100}
          fontFamily={theme.fonts.Overpass_700}
          fontWeight={700}
          fontSize={12}
          textAlign="center"
        >
          09:00
        </Text>
      </HourContainer>
    </Container>
  );
}

export default CardHours;
