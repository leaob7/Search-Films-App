import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/styleLoading";

export default function Loading() {
  return (
    <View>
      <Text style={ styles.loadingText }>Loading...</Text>
    </View>
  );
}