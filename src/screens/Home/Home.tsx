import React from "react";
import { Image } from "react-native";
import Button from "../../components/button";
import Text from "../../components/text";
import Space from "../../components/space";

import { Container } from "./styles";
import theme from "../../theme/styles/Global/theme";
import Climate from "../../assets/climate-change.png";

function Home({ navigation }) {
  return (
    <Container>
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
      {/* <Button
        backgroundColor={theme.colors.dark400}
        height={50}
        width={100}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Text
          color={theme.colors.white}
          fontFamily={theme.fonts.Overpass_600}
          fontSize={23}
          fontWeight={600}
          textAlign="center"
        >
          test
        </Text>
      </Button> */}
    </Container>
  );
}

export default Home;
