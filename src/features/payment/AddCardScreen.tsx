import React from "react";
import { CreditCardForm, Screen, ScreenHeader } from "../../components";

export const AddCardScreen = () => {
  return (
    <Screen safeAreaEdges={["top"]}>
      <ScreenHeader pageTitle="Add card" />
      <CreditCardForm />
    </Screen>
  );
};
