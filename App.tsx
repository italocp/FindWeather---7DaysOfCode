import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/styles/Global/theme";
import {
  useFonts,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
  Overpass_300Light,
} from "@expo-google-fonts/overpass";

import BoasVindas from "./src/screens/boasVindas/boasVindas";

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
    Overpass_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <ThemeProvider theme={theme}>
        <BoasVindas />
      </ThemeProvider>
    </>
  );
}
