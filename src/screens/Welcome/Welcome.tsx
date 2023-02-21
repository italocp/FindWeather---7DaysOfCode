import React from "react";
import { Image } from "react-native";
import Button from "../../components/button";
import Text from "../../components/text";
import theme from "../../theme/styles/Global/theme";

import { Container, Title, Text2, BoldText } from "./styles";

function Welcome({ navigation }) {
  return (
    <Container>
      <Image source={require("../../assets/cloud-and-thunder.png")} />
      <Text
        color={theme.colors.white}
        fontSize={33}
        fontWeight={600}
        fontFamily={theme.fonts.Overpass_600}
        textAlign="center"
      >
        Descubra o clima{"\n"}na sua cidade
      </Text>
      <Text
        fontFamily={theme.fonts.Overpass_400}
        fontSize={22}
        fontWeight={400}
        color={theme.colors.gray100}
        textAlign="center"
      >
        Com o Find<BoldText>Weather</BoldText> nunca{"\n"}ficou tão fácil ter a
        previsão do{"\n"}tempo na palma da sua mão
      </Text>
      <Button
        backgroundColor={theme.colors.dark300}
        borderColor={theme.colors.gray300}
        borderRadius={18}
        height={54}
        width={328}
        onPress={() => navigation.navigate("Home")}
      >
        <Text
          fontFamily={theme.fonts.Overpass_400}
          fontSize={22}
          fontWeight={400}
          textAlign="center"
          color={theme.colors.white}
        >
          Iniciar
        </Text>
      </Button>
    </Container>
  );
}

export default Welcome;
