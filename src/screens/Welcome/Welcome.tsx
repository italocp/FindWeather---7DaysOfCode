import React from "react";
import { Image } from "react-native";
import Button from "../../components/button";

import { Container, Title, Text, BoldText } from "./styles";

function Welcome({ navigation }) {
  return (
    <Container>
      <Image source={require("../../assets/cloud-and-thunder.png")} />
      <Title>Descubra o clima{"\n"}na sua cidade</Title>
      <Text>
        Com o <BoldText>FindWeather</BoldText> nunca{"\n"}ficou tão fácil ter a
        previsão do{"\n"}tempo na palma da sua mão
      </Text>
      <Button Text="Iniciar" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
}

export default Welcome;
