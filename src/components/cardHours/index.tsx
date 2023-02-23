import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import theme from "../../theme/styles/Global/theme";
import Text from "../text";

import CloudRain from "../../assets/CloudRaining.png";

import { Container, HourContainer, TemperatureContainer } from "./styles";

interface ICardHour {
  id: number;
  temperature: number;
  icon: ImageSourcePropType;
  hour: string;
}

interface ICardHourData {
  data: ICardHour[];
}

function CardHours({ data }: ICardHourData) {
  return (
    <Container>
      {data.map((item) => (
        <HourContainer key={item.id}>
          <TemperatureContainer>
            <Text
              color={theme.colors.white}
              fontFamily={theme.fonts.Overpass_700}
              fontWeight={700}
              fontSize={18}
              textAlign="center"
            >
              {item.temperature}
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
          <Image source={item.icon} style={{ marginBottom: 9 }} />
          <Text
            color={theme.colors.gray100}
            fontFamily={theme.fonts.Overpass_700}
            fontWeight={700}
            fontSize={12}
            textAlign="center"
          >
            {item.hour}
          </Text>
        </HourContainer>
      ))}
    </Container>
  );
}

export default CardHours;
