import React from "react";
import { Image } from "react-native";

import { Container, Title, Text, BoldText } from "./styles";

function boasVindas() {
  return (
    <Container>
      <Image source={require("../../assets/cloud-and-thunder.png")} />
      <Title>Descubra o clima{"\n"}na sua cidade</Title>
      <Text>
        Com o <BoldText>FindWeather</BoldText> nunca{"\n"}ficou tão fácil ter a
        previsão do{"\n"}tempo na palma da sua mão{" "}
      </Text>
    </Container>
  );
}

export default boasVindas;
