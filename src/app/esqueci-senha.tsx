import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

export default function EsqueciSenha() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.header}>
          <Text style={styles.logoText}>
            VIDA{"\n"}TEA
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Esqueceu a senha?
          </Text>

          <Text style={styles.description}>
            Enviaremos um e-mail para a autenticação e{"\n"}
            recuperação de senha
          </Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/email-enviado")}
          >
            <Text style={styles.buttonText}>
              Enviar
            </Text>
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
    backgroundColor: "#FFF",
    borderRadius: 32,
    overflow: "hidden",
  },

  header: {
    height: 230,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
  },

  logoText: {
    color: "#0070d9",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
  },

  content: {
    paddingHorizontal: 34,
    marginTop: 55,
  },

  title: {
    color: "#087bdc",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
  },

  description: {
    color: "#666",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 18,
  },

  input: {
    height: 42,
    borderWidth: 1.5,
    borderColor: "#0088ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 25,
  },

  button: {
    height: 46,
    backgroundColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
  },
});