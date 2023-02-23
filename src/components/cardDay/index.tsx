import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import theme from "../../theme/styles/Global/theme";
import Text from "../text";

import DropMini from "../../assets/drop-miniature.png";
import Wind from "../../assets/wind-miniature.png";
import Rain from "../../assets/raining-cloud-miniature.png";

import { Container, CardContainer, Line } from "./styles";

export interface ICard {
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
}

function Card({ image, subTitle, title }: ICard) {
  return (
    <CardContainer>
      <Image source={image} />
      <Text
        fontFamily={theme.fonts.Overpass_700}
        fontWeight={700}
        fontSize={16}
        color={theme.colors.white}
        textAlign="center"
        style={{ marginTop: 6 }}
      >
        {title}
      </Text>
      <Text
        fontFamily={theme.fonts.Overpass_300}
        fontWeight={300}
        fontSize={14}
        color={theme.colors.gray400}
        textAlign="center"
      >
        {subTitle}
      </Text>
    </CardContainer>
  );
}

function CardDay() {
  return (
    <Container>
      <Card title="24%" subTitle="Umidade" image={DropMini} />
      <Line />
      <Card title="20km/h" subTitle="Veloc.Vento" image={Wind} />
      <Line />
      <Card title="76%" subTitle="Chuva" image={Rain} />
    </Container>
  );
}

export default CardDay;
