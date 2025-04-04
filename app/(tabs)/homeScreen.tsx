import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import ropaDeportiva from "../../data/datas";
import offers from "../../data/offersList";
import AntDesign from "@expo/vector-icons/AntDesign";

export interface Offer {
  id: number;
  imagen: any;
}
export interface Ropa {
  id: number;
  imagen: any;
  titulo: string;
  precio: number;
  ponderacion: number;
}

export default function HomeScreen() {
  const colorStarIcon = "text-modoDark";
  const tops = ropaDeportiva.filter((item) => item.category === "Tops");
  const leggings = ropaDeportiva.filter((item) => item.category === "Leggings");
  const conjunto = ropaDeportiva.filter((item) => item.category === "Conjuntos");

  const cardOffer = ({ item }: { item: Offer }) => (
    <View>
      <Image source={item.imagen} />
    </View>
  );

  const cardRopa = ({ item }: { item: Ropa }) => (
    <View
      // style={{ width: 160, height: 182, marginLeft: 8, borderRadius: 10 }}
      className="w-40 h-[182px] rounded-2xl ml-2"
    >
      <Image
        source={item.imagen}
        resizeMode="cover"
        className="w-full h-32 rounded-t-2xl"
      />
      <Text className="text-sm">{item.titulo}</Text>

      <View className="flex-row justify-between px-1">
        <Text className="text-sm text-modoDark font-bold">${item.precio}</Text>

        <View className="flex-row items-center">
          <AntDesign name="star" size={16} color={colorStarIcon} />
          <Text className="text-sm ml-1">{item.ponderacion}</Text>
        </View>

      </View>

    </View>
  );

  return (
    <ScrollView className="flex-1 bg-modoLight">
      <StatusBar barStyle="light-content" />
      {/* CARD OFFERS */}
      <View>
        <FlatList
          data={offers}
          renderItem={cardOffer}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* TITULO */}
      <View className="flex-row justify-between items-center mt-4 mb-2 px-4">
        <Text className="text-modoDark font-bold text-2xl">
          Tops and Bras Collection
        </Text>
        <Text className="text-unActive">Show all</Text>
      </View>
      {/* CARD TOPS */}
      <View className="mt-2 px-2">
        <FlatList
          data={tops}
          renderItem={cardRopa}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* TITULO */}
      <View className="flex-row justify-between items-center mt-4 mb-2 px-4">
        <Text className="text-modoDark font-bold text-2xl">
          Leggings Collection
        </Text>
        <Text className="text-unActive">Show all</Text>
      </View>
      {/* CARD TOPS */}
      <View className="mt-2 px-2">
        <FlatList
          data={leggings}
          renderItem={cardRopa}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* TITULO */}
      <View className="flex-row justify-between items-center mt-4 mb-2 px-4">
        <Text className="text-modoDark font-bold text-2xl">
          ActiveWear Collection
        </Text>
        <Text className="text-unActive">Show all</Text>
      </View>
      {/* CARD TOPS */}
      <View className="mt-2 px-2">
        <FlatList
          data={conjunto}
          renderItem={cardRopa}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}
