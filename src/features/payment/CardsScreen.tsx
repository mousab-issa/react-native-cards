import React, { FC } from "react";
import { CreditCard, Screen, ScreenHeader } from "../../components";
import { useAppSelector } from "../../state/hooks";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable } from "react-native";
import { AppStackParamList } from "src/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<AppStackParamList, "CardListScreen">;

export const CardsScreen: FC<Props> = ({ navigation }) => {
  const cards = useAppSelector((state) => state.cards.cardList);

  const renderCard = (card: Card) => {
    return <CreditCard key={card.cardNumber} {...card} />;
  };

  const renderAdd = () => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("AddCardScreen");
        }}
      >
        <Ionicons name="add" size={5} />;
      </Pressable>
    );
  };

  return (
    <Screen safeAreaEdges={["top"]} preset="scroll">
      <ScreenHeader pageTitle="Cards" rightComponent={renderAdd} />
      {cards.map(renderCard)}
    </Screen>
  );
};
