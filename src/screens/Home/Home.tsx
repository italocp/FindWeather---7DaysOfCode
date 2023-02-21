import React from "react";
import Button from "../../components/button";
import Text from "../../components/text";
import Space from "../../components/space";

import { Container } from "./styles";
import theme from "../../theme/styles/Global/theme";

function Home({ navigation }) {
  return (
    <Container>
      <Button
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
      </Button>
    </Container>
  );
}

export default Home;
