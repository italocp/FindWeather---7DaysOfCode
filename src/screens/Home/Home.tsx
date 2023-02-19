import React from "react";
import Button from "../../components/button";

import { Container, Text } from "./styles";

function Home({ navigation }) {
  return (
    <Container>
      <Text>test</Text>
      <Button Text="Go Back" onPress={() => navigation.navigate("Welcome")} />
    </Container>
  );
}

export default Home;
