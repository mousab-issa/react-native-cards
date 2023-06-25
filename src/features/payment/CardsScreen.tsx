import React from "react";
import { CreditCard, Screen, ScreenHeader } from "../../components";

export const CardsScreen = () => {
  return (
    <Screen safeAreaEdges={["top"]} preset="scroll">
      <ScreenHeader pageTitle="Cards" />
      <CreditCard
        cardHolder="John Doe"
        cardNumber="1234123412341234"
        expiryDate="01/23"
      />
    </Screen>
  );
};
