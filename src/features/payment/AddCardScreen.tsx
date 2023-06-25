import React from "react";
import { Screen, ScreenHeader } from "../../components";
import AddCardForm from "./AddCardForm";

export const AddCardScreen = () => {
  return (
    <Screen safeAreaEdges={["top"]}>
      <ScreenHeader pageTitle="Add card" />
      <AddCardForm />
    </Screen>
  );
};
