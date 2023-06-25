import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddCardScreen, CardsScreen } from "../features/payment";
import { AppStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddCardScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="CardListScreen" component={CardsScreen} />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
    </Stack.Navigator>
  );
};
