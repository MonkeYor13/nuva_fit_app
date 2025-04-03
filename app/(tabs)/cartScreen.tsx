import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function cartScreen() {
  return (
    <View>
      {/* <Text>cartScreen</Text> */}
      <Link href="/fineshedScreen">Go to Fineshed</Link>
    </View>
  );
}
