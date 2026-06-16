import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function Duvidas() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Image
            source={require("../../assets/images/logopequeno.jpeg")}
            style={styles.logo}
          />

          <TouchableOpacity
            style={styles.avatar}
            onPress={() => router.push("/perfil")}
          >
            <Text style={styles.avatarText}>👤</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>
          Tire suas dúvidas com especialistas
        </Text>

        <View style={styles.messageRow}>
          <View style={styles.userCircle}>
            <Text style={styles.userIcon}>👤</Text>
          </View>

          <Text style={styles.helpText}>
            Preencha o campo abaixo com sua pergunta.
          </Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            placeholder="Sua mensagem..."
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TouchableOpacity>
            <Text style={styles.send}>✈</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    backgroundColor: "#FFF",
  },

  phone: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
    overflow: "hidden",
  },
  
  topBar: {
    height: 58,
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 82,
    height: 34,
    resizeMode: "contain",
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 22,
  },

  back: {
    color: "#087BDC",
    fontSize: 32,
    marginTop: 8,
    marginLeft: 18,
  },

  title: {
    color: "#087BDC",
    fontSize: 18,
    fontWeight: "900",
    marginTop: 8,
    marginHorizontal: 18,
    marginBottom: 26,
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
  },

  userCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  userIcon: {
    fontSize: 22,
  },

  helpText: {
    color: "#777",
    fontSize: 11,
    flex: 1,
  },

  inputArea: {
    position: "absolute",
    bottom: 18,
    left: 12,
    right: 12,
    height: 42,

    backgroundColor: "#FFF",
    borderRadius: 20,

    borderWidth: 1,
    borderColor: "#DDD",

    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    height: 42,
    fontSize: 12,
  },

  send: {
    fontSize: 20,
    color: "#666",
  },
});