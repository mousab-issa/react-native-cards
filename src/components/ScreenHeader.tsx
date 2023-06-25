import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import React, { FC, ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";

import { Text } from "./Text";

interface ScreenHeaderProps {
  pageTitle?: string;
  rightComponent?: () => ReactNode;
  showBackButton?: boolean;
}

export const ScreenHeader: FC<ScreenHeaderProps> = ({
  pageTitle,
  rightComponent,
  showBackButton = true,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TouchableOpacity
        onPress={() => (showBackButton ? navigation.goBack() : undefined)}
      >
        {showBackButton && (
          <Ionicons name="chevron-back" size={24} color="black" />
        )}
      </TouchableOpacity>

      {pageTitle && (
        <Text
          preset={"bold"}
          weight={"bold"}
          size={"sm"}
          style={{ marginBottom: 18 }}
        >
          {pageTitle}
        </Text>
      )}

      {rightComponent ? <View>{rightComponent()}</View> : <View />}
    </View>
  );
};
