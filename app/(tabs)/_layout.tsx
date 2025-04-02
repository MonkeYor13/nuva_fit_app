import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="homeScreen" options={{ title: "casa" }} />
    </Tabs>
  );
}
