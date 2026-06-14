import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Duvidas() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>VIDA{"\n"}TEA</Text>
          <Text style={styles.avatar}>👤</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Tire suas dúvidas com especialistas</Text>

        <View style={styles.messageRow}>
          <Text style={styles.userIcon}>👤</Text>
          <Text style={styles.helpText}>Preencha o campo abaixo com sua pergunta.</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            placeholder=""
            style={styles.input}
          />
          <TouchableOpacity>
            <Text style={styles.send}>➤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    width: 390,
    height: 844,
    backgroundColor: "#EAF8FF",
    borderRadius: 32,
    overflow: "hidden",
    paddingHorizontal: 20,
  },
  topBar: {
    height: 70,
    backgroundColor: "#fff",
    marginHorizontal: -20,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    color: "#087bdc",
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 15,
  },
  avatar: {
    fontSize: 26,
  },
  back: {
    color: "#087bdc",
    fontSize: 36,
    marginTop: 12,
  },
  title: {
  color: "#087bdc",
  fontSize: 18,
  fontWeight: "900",
  marginTop: 18,
  marginBottom: 34,
  textAlign: "center",
},
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    fontSize: 32,
    marginRight: 12,
  },
 helpText: {
  color: "#777",
  fontSize: 11,
  flex: 1,
},
  inputArea: {
    position: "absolute",
    bottom: 22,
    left: 20,
    right: 20,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 44,
  },
  send: {
    fontSize: 22,
    color: "#087bdc",
  },
});