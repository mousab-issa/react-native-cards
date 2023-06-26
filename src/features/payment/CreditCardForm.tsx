import React from "react";
import { useForm } from "react-hook-form";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { Text, MaskedTextField } from "../../components";
import { useAppDispatch } from "../../state/hooks";
import { addCard } from "./CardsSlice";
import { useNavigation } from "@react-navigation/native";
import { AppStackParamList } from "src/types/navigation";

type FormData = Card;

export const CreditCardForm: React.FC = () => {
  const navigation = useNavigation<any>();

  const { control, handleSubmit } = useForm<FormData>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormData) => {
    dispatch(addCard(data));
    navigation.navigate("CardListScreen");
  };

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
  const nameMask: RegExp[] = Array.from({ length: 20 }).fill(/\w/) as RegExp[];

  return (
    <View>
      <Text preset="formLabel" style={styles.label}>
        Card Number
      </Text>
      <MaskedTextField
        control={control}
        mask={cardNumberMask}
        placeholder="Card Number"
        name="cardNumber"
        rules={{ required: true }}
        keyboardType="numeric"
      />
      <Text preset="formLabel" style={styles.label}>
        Name on Card
      </Text>
      <MaskedTextField
        keyboardType="default"
        control={control}
        mask={nameMask}
        placeholder="Name on Card"
        name="cardHolder"
        rules={{ required: true }}
      />
      <Text preset="formLabel" style={styles.label}>
        Expiry Date
      </Text>
      <MaskedTextField
        keyboardType="numeric"
        control={control}
        mask={expiryDateMask}
        placeholder="Expiry Date (MM/YY)"
        name="expiryDate"
        rules={{ required: true }}
      />
      <Text preset="formLabel" style={styles.label}>
        CCV
      </Text>
      <MaskedTextField
        keyboardType="numeric"
        control={control}
        mask={ccvMask}
        placeholder="CCV"
        name="ccv"
        rules={{ required: true }}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText} preset="bold">
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: colors.palette.black,
    fontSize: 16,
    marginBottom: 5,
  },
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
