import { FC } from "react";
import { SvgProps } from "react-native-svg";

import CreditCard from "../assets/icons/card.svg";

export type IconNames = "creditCard";

interface IconProps extends SvgProps {
  name: IconNames;
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case "creditCard":
      return <CreditCard {...props} />;
    default:
      return null;
  }
};
