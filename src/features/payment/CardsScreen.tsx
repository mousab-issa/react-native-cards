import { StyleSheet } from "react-native";
import React from "react";
import { CreditCard, Screen } from "../../components";

export const CardsScreen = () => {
  return (
    <Screen safeAreaEdges={["top"]} preset="scroll">
      <CreditCard
        cardHolder="John Doe"
        cardNumber="1234"
        expiryDate="01/23"
        ccv="123"
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
