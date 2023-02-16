import { StatusBar, Text, View } from "react-native";
import {
  useFonts,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from "@expo-google-fonts/overpass";

export default function App() {
  let [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1B1D22",
        }}
      >
        <Text
          style={{
            fontFamily: "Overpass_400Regular",
            fontSize: 30,
            color: "#fff",
          }}
        >
          Hello Word!
        </Text>
      </View>
    </>
  );
}
