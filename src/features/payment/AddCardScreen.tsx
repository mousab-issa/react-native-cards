import React from "react";
import { CreditCardForm, Screen } from "../../components";

export const AddCardScreen = () => {
  return (
    <Screen safeAreaEdges={["top"]}>
      <CreditCardForm />
    </Screen>
  );
};
