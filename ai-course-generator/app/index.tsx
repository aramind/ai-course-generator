import Colors from "@/constants/Colors";
import { Image, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.WHITE,
      }}
    >
      <Image
        source={require("@/assets/images/landing.png")}
        style={{
          height: 400,
          width: "100%",
        }}
      />
    </View>
  );
}
