import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { addCard } from "./CardsSlice";
import { useAppDispatch } from "../../state/hooks";

const AddCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [ccv, setCcv] = useState("");
  const [expiry, setExpiry] = useState("");

  const dispatch = useAppDispatch();

  const submitForm = () => {
    const newCard = {
      cardNumber,
      holderName,
      ccv,
      expiry,
    };
    // dispatch(addCard({ ...newCard }));
  };

  return (
    <View>
      <TextInput
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <TextInput
        placeholder="Card Holder Name"
        value={holderName}
        onChangeText={setHolderName}
      />
      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="CCV"
          value={ccv}
          onChangeText={setCcv}
          style={{ flex: 1 }}
        />
        <TextInput
          placeholder="Expiry Date"
          value={expiry}
          onChangeText={setExpiry}
          style={{ flex: 1 }}
        />
      </View>
      <Button title="Add Card" onPress={submitForm} />
    </View>
  );
};

export default AddCardForm;
