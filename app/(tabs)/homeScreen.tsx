import { View, Text, StatusBar, FlatList, Image } from "react-native";
import React from "react";
import pantList from "../../data/pantsList";
import data from "../../data/datas";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-modoLight">
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={pantList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image source={item.imagen} style={{ width: 200, height: 200 }} />
          </View>
        )}
      />
      
    </View>
  );
}
