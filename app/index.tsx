import { ImageBackground, StatusBar, Text, View } from "react-native";
const BgStart = require("../assets/images/icons/Start.png");
import { Link } from "expo-router";

export default function Index() {
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
          // style={{
          //   textShadowColor: "#262626",
          //   textShadowOffset: { width: 3, height: 4 },
          //   textShadowRadius: 3,
          // }}
        >
          Nova Fit
        </Text>
      </ImageBackground>
      <Link href="/homeScreen">profile</Link>
    </View>
  );
}
