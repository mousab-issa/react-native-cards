import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface CardProps {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  ccv: string;
}

export const CreditCard: React.FC<CardProps> = ({
  cardHolder,
  cardNumber,
  expiryDate,
  ccv,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardContent}>Visa</Text>
      <Text style={styles.cardContent}>•••• •••• •••• {cardNumber}</Text>
      <Text style={styles.cardContent}>{cardHolder}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.cardContent}>{expiryDate}</Text>
        <Text style={styles.cardContent}>CCV: {ccv}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 179,
    borderRadius: 13,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    padding: 15,
  },
  cardContent: {
    fontSize: 16,
    color: "#000",
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
