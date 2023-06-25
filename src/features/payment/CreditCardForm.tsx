import React from "react";
import { useForm } from "react-hook-form";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { Text, MaskedTextField } from "../../components";

type FormData = {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  ccv: string;
};

export const CreditCardForm: React.FC = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  const cardNumberMask = [
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];
  const expiryDateMask = [/\d/, /\d/, "/", /\d/, /\d/];
  const ccvMask = [/\d/, /\d/, /\d/];

  return (
    <View>
      <MaskedTextField
        control={control}
        mask={cardNumberMask}
        placeholder="Card Number"
        name="cardNumber"
        rules={{ required: true }}
      />
      <MaskedTextField
        control={control}
        mask={cardNumberMask}
        placeholder="Name on Card"
        name="cardName"
        rules={{ required: true }}
      />
      <MaskedTextField
        control={control}
        mask={expiryDateMask}
        placeholder="Expiry Date (MM/YY)"
        name="expiryDate"
        rules={{ required: true }}
      />
      <MaskedTextField
        control={control}
        mask={ccvMask}
        placeholder="CCV"
        name="ccv"
        rules={{ required: true }}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText} preset="bold">
          Submit{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 45,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22.5,
  },
  buttonText: {
    color: colors.palette.white,
  },
});
