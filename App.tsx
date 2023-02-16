import { StatusBar, Text, View } from "react-native";

export default function App() {
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
            color: "#fff",
          }}
        >
          Hello Word!
        </Text>
      </View>
    </>
  );
}
