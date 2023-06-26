import React, { FC } from "react";
import { Pressable, View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";

import { CreditCard, Screen, ScreenHeader } from "../../components";
import { NoCardsState } from "./NoCardsState";

import { useAppSelector } from "../../state/hooks";

import { AppStackParamList } from "../../types/navigation";
import { useOmise } from "../../hooks/useOmise";

type Props = NativeStackScreenProps<AppStackParamList, "CardListScreen">;

export const CardsScreen: FC<Props> = ({ navigation }) => {
  const cards = useAppSelector((state) => state.cards.cardList);
  const { createSource, createToken } = useOmise();

  const payRandomAmount = async (card: Card) => {
    // const data = await createToken({
    //   card: {
    //     name: card.cardHolder,
    //     number: card.cardNumber,
    //     city: "Bangkok",
    //     postal_code: 10320,
    //     expiration_month: card.expiryDate.split("/")[0],
    //     expiration_year: card.expiryDate.split("/")[1],
    //     security_code: card.ccv,
    //   },
    // });
    // const data = await Omise.createSource(
    //     'type': 'internet_banking_bbl',
    //     'amount': 500000,
    //     'currency': 'thb'
    // });
  };

  const renderCard = (card: Card) => {
    return (
      <Pressable key={card.cardNumber} onPress={() => payRandomAmount(card)}>
        <CreditCard {...card} />
      </Pressable>
    );
  };

  const renderAdd = () => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("AddCardScreen");
        }}
      >
        <Ionicons name="add" size={30} />
      </Pressable>
    );
  };

  return (
    <Screen safeAreaEdges={["top"]} preset="scroll">
      <ScreenHeader pageTitle="Cards" rightComponent={renderAdd} />
      <View style={styles.cardList}>
        {!!cards.length && cards.map(renderCard)}
      </View>
      {!cards.length && <NoCardsState />}
    </Screen>
  );
};

const styles = StyleSheet.create({
  cardList: {
    gap: 30,
    flexDirection: "column",
  },
});
