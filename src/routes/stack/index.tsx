import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../../screens/Welcome/Welcome";
import Home from "../../screens/Home/Home";

export type StackProps = {
  Welcome: undefined;
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<StackProps>();

export default function MyStack() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
