import React from "react";
import { StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import MaskInput from "react-native-mask-input";
import colors from "../theme/colors";

interface MaskedTextFieldProps {
  control: any;
  mask: (string | RegExp)[];
  name: string;
  placeholder: string;
  rules: Record<string, any>;
}

export const MaskedTextField: React.FC<MaskedTextFieldProps> = ({
  control,
  mask,
  name,
  placeholder,
  rules,
}) => (
  <Controller
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <MaskInput
        keyboardType="numeric"
        mask={mask}
        onChangeText={(masked) => onChange(masked)}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        style={styles.input}
      />
    )}
    name={name}
    rules={rules}
  />
);

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.palette.grey25,
    borderWidth: 1.5,
    fontSize: 18,
    height: 56,
    width: "100%",
  },
});
