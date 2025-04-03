import {
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
const BgStart = require("../assets/images/icons/Start.png");
import { Link, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter(); // Usa useRouter de expo-router

  const handlePress = () => {
    router.push("/homeScreen"); // Usa router.push para navegar
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle="default" translucent backgroundColor="transparent" />
      <ImageBackground
        source={BgStart}
        resizeMode="cover"
        fadeDuration={600}
        className="flex-1 items-center justify-center"
      >
        <Text
          className="text-modoLight font-bold text-5xl"
          style={{
            textShadowColor: "#262626",
            textShadowOffset: { width: 3, height: 4 },
            textShadowRadius: 3,
          }}
        >
          Nova Fit
        </Text>
        <Pressable
          className="bg-modoLight rounded-full w-48 h-12 items-center justify-center mt-10 absolute bottom-20"
          onPress={handlePress}
        >
          <Text className="text-modoDark text-xl">Train Here!</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
