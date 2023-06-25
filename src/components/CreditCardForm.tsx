import React from "react";
import { useForm, Controller } from "react-hook-form";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import MaskInput from "react-native-mask-input";
import colors from "../theme/colors";
import { Text } from "../components/Text";

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
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskInput
            keyboardType="numeric"
            mask={cardNumberMask}
            onChangeText={(masked, raw) => onChange(masked)}
            onBlur={onBlur}
            value={value}
            placeholder="Card Number"
            style={styles.input}
          />
        )}
        name="cardNumber"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Name on Card"
            style={styles.input}
          />
        )}
        name="cardName"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskInput
            keyboardType="numeric"
            mask={expiryDateMask}
            onChangeText={(masked, raw) => onChange(masked)}
            onBlur={onBlur}
            value={value}
            placeholder="Expiry Date (MM/YY)"
            style={styles.input}
          />
        )}
        name="expiryDate"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskInput
            keyboardType="numeric"
            mask={ccvMask}
            onChangeText={(masked, raw) => onChange(masked)}
            onBlur={onBlur}
            value={value}
            placeholder="CCV"
            style={styles.input}
          />
        )}
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
  input: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.palette.grey25,
    borderWidth: 1.5,
    fontSize: 18,
    height: 56,
  },
});
