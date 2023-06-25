import { FC } from "react";
import { SvgProps } from "react-native-svg";

export type IconNames = "visa" | "mastercard" | "unionPay" | "creditCard";

interface IconProps extends SvgProps {
  name: IconNames;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    default:
      return null;
  }
};
