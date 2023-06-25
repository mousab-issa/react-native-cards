import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../theme/colors";
import { Text } from "../components";

interface CardProps {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
}

export const CreditCard: React.FC<CardProps> = ({
  cardHolder,
  cardNumber,
  expiryDate,
}) => {
  const hideCardNumber = (cardNumber: string) => {
    let lastFour = cardNumber.slice(cardNumber.length - 4);
    return ["••••", "••••", "••••", lastFour];
  };

  const [part1, part2, part3, part4] = hideCardNumber(cardNumber);

  return (
    <View style={styles.card}>
      <Text preset="heading" style={styles.visa}>
        Visa
      </Text>

      <View style={styles.cardNumber}>
        <Text preset="bold" style={styles.numberPart}>
          {part1}
        </Text>
        <Text preset="bold" style={styles.numberPart}>
          {part2}
        </Text>
        <Text preset="bold" style={styles.numberPart}>
          {part3}
        </Text>
        <Text preset="bold" style={styles.numberPart}>
          {part4}
        </Text>
      </View>

      <View style={styles.cardDetails}>
        <View>
          <Text preset="formHelper" size="sm" style={styles.label}>
            Name on Card
          </Text>
          <Text preset="bold" style={styles.cardContent}>
            {cardHolder}
          </Text>
        </View>

        <View>
          <Text preset="formHelper" size="sm" style={styles.label}>
            Expires
          </Text>
          <Text preset="bold" style={styles.cardContent}>
            {expiryDate}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 179,
    borderRadius: 13,
    backgroundColor: colors.palette.white,
    shadowColor: colors.palette.black,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    padding: 15,
  },
  visa: {
    fontSize: 20,
    color: colors.palette.black,
    marginBottom: 10,
  },
  cardNumber: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  numberPart: {
    color: colors.palette.black,
  },
  label: {
    color: colors.palette.black,
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: colors.palette.black,
  },
  cardDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
