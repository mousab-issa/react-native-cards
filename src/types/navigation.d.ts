import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppStackParamList = {
  AddCardScreen: undefined;
  CardListScreen: { userId: string };
};

export type AddCardScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "AddCardScreen"
>;

export type CardListScreenProps = NativeStackScreenProps<
  AppStackParamList,
  "CardListScreen"
>;
