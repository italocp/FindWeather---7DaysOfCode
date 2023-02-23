import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import Button from "../../components/button";
import Space from "../../components/space";
import Text from "../../components/text";
import Temperature from "../../components/temperature";
import CardDay from "../../components/cardDay";

import Climate from "../../assets/climate-change.png";
import Raining from "../../assets/raining.png";
import theme from "../../theme/styles/Global/theme";
import { Container, LocationContainer, TitleContainer } from "./styles";

const EmptyState = () => {
  return (
    <>
      <Space marginTop={74} />
      <Text
        fontFamily={theme.fonts.Overpass_400}
        fontWeight={400}
        fontSize={33}
        textAlign="center"
        color={theme.colors.white}
      >
        Find
        <Text
          fontFamily={theme.fonts.Overpass_700}
          fontWeight={600}
          fontSize={33}
          textAlign="center"
          color={theme.colors.white}
        >
          Weather
        </Text>
      </Text>
      <Space marginBottom={105} />
      <Image source={Climate} />
      <Space marginBottom={105} />
      <Button width={328} height={98}>
        <Text
          color={theme.colors.gray100}
          fontFamily={theme.fonts.Overpass_400}
          fontWeight={400}
          fontSize={22}
          textAlign="center"
          style={{ textDecorationLine: "underline" }}
        >
          Selecione aqui um local e{"\n"} encontre o clima em tempo real
        </Text>
      </Button>
    </>
  );
};

function Home({ navigation }) {
  return (
    <Container>
      {/* <EmptyState /> */}
      <Space marginTop={49} />
      <LocationContainer>
        <Ionicons name="location-sharp" size={24} color={theme.colors.white} />
        <TitleContainer>
          <Text
            color={theme.colors.white}
            fontFamily={theme.fonts.Overpass_400}
            fontWeight={400}
            fontSize={18}
            textAlign="center"
          >
            Brasília, Brasil
          </Text>
          <Text
            color={theme.colors.gray100}
            fontFamily={theme.fonts.Overpass_400}
            fontWeight={400}
            fontSize={16}
            textAlign="center"
          >
            Domingo, 01 jan de 2023
          </Text>
        </TitleContainer>
      </LocationContainer>
      <Space marginTop={43} />
      <Image source={Raining} />
      <Space marginTop={10} />
      <Temperature />
      <Space marginTop={45} />
      <CardDay />
    </Container>
  );
}

export default Home;
