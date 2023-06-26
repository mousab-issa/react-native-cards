import React from "react";
import { StyleSheet, TouchableOpacity, View, Dimensions } from "react-native";
import { Text, Icon } from "../../components";
import colors from "../../theme/colors";
import { useNavigation } from "@react-navigation/native";

const height = Dimensions.get("screen").height;

export const NoCardsState = () => {
  const navigation = useNavigation<any>();

  const addCard = () => {
    navigation.navigate("AddCardScreen");
  };
  return (
    <View style={styles.container}>
      <Icon name="creditCard" />
      <Text preset="heading" style={styles.text}>
        No Cards Found
      </Text>
      <Text preset="heading" style={styles.text}>
        We recommend adding a cards for easy payment
      </Text>
      <TouchableOpacity onPress={addCard}>
        <Text preset="heading" style={styles.button}>
          Add New Card
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height / 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: colors.primary,
  },
  text: { textAlign: "center" },
});
