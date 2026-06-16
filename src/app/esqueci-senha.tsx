import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function EsqueciSenha() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <Image
          source={require("../../assets/images/logocompleta.jpeg")}
          style={styles.headerImage}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Esqueceu a senha?</Text>

          <Text style={styles.description}>
            Enviaremos um e-mail para a autenticação e{"\n"}
            recuperação de senha.
          </Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/email-enviado")}
          >
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.backText}>Voltar para o login</Text>
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

  headerImage: {
    width: "100%",
    height: 160,
    resizeMode: "stretch",
  },

  content: {
    paddingHorizontal: 28,
    marginTop: 20,
  },

  title: {
    color: "#087BDC",
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
    borderColor: "#0088FF",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 25,
  },

  button: {
    height: 46,
    backgroundColor: "#087BDC",
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 1,
  },

  backText: {
    color: "#087BDC",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "700",
  },
});