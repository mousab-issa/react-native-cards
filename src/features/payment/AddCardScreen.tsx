import React from "react";
import { Screen, ScreenHeader } from "../../components";
import { CreditCardForm } from "./CreditCardForm";

export const AddCardScreen = () => {
  return (
    <Screen safeAreaEdges={["top"]}>
      <ScreenHeader pageTitle="Add card" />
      <CreditCardForm />
    </Screen>
  );
};
