import { View, Image, StyleSheet } from "react-native";

export default function Splash() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logosplash.jpeg")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 300,
    height: 300,
  },
});