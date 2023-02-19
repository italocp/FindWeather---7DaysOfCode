import React from "react";
import { Image, Text } from "react-native";
import Button from "../../components/button";
import theme from "../../theme/styles/Global/theme";

import { Container, Title, Text2, BoldText } from "./styles";

function Welcome({ navigation }) {
  return (
    <Container>
      <Image source={require("../../assets/cloud-and-thunder.png")} />
      <Title>Descubra o clima{"\n"}na sua cidade</Title>
      <Text2>
        Com o <BoldText>FindWeather</BoldText> nunca{"\n"}ficou tão fácil ter a
        previsão do{"\n"}tempo na palma da sua mão
      </Text2>
      <Button
        backgroundColor={theme.colors.dark300}
        borderColor={theme.colors.gray300}
        borderRadius={18}
        height={54}
        width={328}
        onPress={() => navigation.navigate("Home")}
      >
        <Text2>Iniciar</Text2>
      </Button>
    </Container>
  );
}

export default Welcome;
