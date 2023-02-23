import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import Button from "../../components/button";
import Space from "../../components/space";
import Text from "../../components/text";
import Temperature from "../../components/temperature";
import CardDay from "../../components/cardDay";
import CardHours from "../../components/cardHours";

import Climate from "../../assets/climate-change.png";
import Raining from "../../assets/raining.png";

import DropMiniaturePNG from "../../assets/drop-miniature.png";
import WindMiniaturePNG from "../../assets/wind-miniature.png";
import RainingCloudPNG from "../../assets/raining-cloud-miniature.png";

import theme from "../../theme/styles/Global/theme";
import {
  Container,
  LocationContainer,
  TitleContainer,
  TodayAndNext7daysContainer,
} from "./styles";

const dataCardHour = [
  {
    id: 1,
    icon: DropMiniaturePNG,
    temperature: 23,
    hour: "09:00",
  },

  {
    id: 2,
    icon: WindMiniaturePNG,
    temperature: 18,
    hour: "13:00",
  },

  {
    id: 3,
    icon: RainingCloudPNG,
    temperature: 8,
    hour: "17:00",
  },

  {
    id: 4,
    icon: RainingCloudPNG,
    temperature: 8,
    hour: "23:00",
  },
];

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

const CityState = () => {
  return (
    <>
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
      <Space marginTop={43} />
      <TodayAndNext7daysContainer>
        <Text
          fontFamily={theme.fonts.Overpass_400}
          fontWeight={400}
          fontSize={20}
          color={theme.colors.white}
          textAlign="left"
        >
          Hoje
        </Text>
        <Button
          width={121}
          height={30}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text
            fontFamily={theme.fonts.Overpass_400}
            fontWeight={500}
            fontSize={16}
            color={theme.colors.gray100}
            textAlign="right"
          >
            Próximos 7 dias
          </Text>
          <Ionicons
            name="chevron-forward"
            color={theme.colors.gray100}
            size={15}
          />
        </Button>
      </TodayAndNext7daysContainer>
      <Space marginTop={21} />
      <CardHours data={dataCardHour} />
    </>
  );
};

function Home() {
  return (
    <Container>
      {/* <EmptyState /> */}
      <CityState />
    </Container>
  );
}

export default Home;
