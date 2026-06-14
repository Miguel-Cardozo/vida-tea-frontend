import { View, Text } from "react-native";

export default function Splash() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        VidaTEA
      </Text>
    </View>
  );
}