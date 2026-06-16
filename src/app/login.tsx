import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import { router } from "expo-router";
import { apiFetch } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function fazerLogin() {
    try {
      if (!email || !senha) {
        Alert.alert("Atenção", "Preencha e-mail e senha.");
        return;
      }

      setCarregando(true);

      const resposta = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      console.log("Login realizado:", resposta);
      await AsyncStorage.setItem("usuario", JSON.stringify(resposta.usuario));

      Alert.alert("Sucesso", "Login realizado com sucesso!");
      router.push("/home");
    } catch (error: any) {
      Alert.alert("Erro no login", error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <Image
          source={require("../../assets/images/logocompleta.jpeg")}
          style={styles.headerImage}
        />

        <View style={styles.content}>
          <Text style={styles.title}>Entre em sua conta</Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity onPress={() => router.push("/esqueci-senha")}>
            <Text style={styles.forgot}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={fazerLogin}
            disabled={carregando}
          >
            <Text style={styles.buttonText}>
              {carregando ? "Entrando..." : "Entrar"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => router.push("/cadastro")}
          >
            <Text style={styles.outlineText}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/termos")}>
            <Text style={styles.terms}>
              Termos de Uso e Política de Privacidade
            </Text>
          </TouchableOpacity>

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>Entrar com</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={styles.googleButton}>
            <Text style={styles.googleText}>G Google</Text>
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
    marginTop: 8,
  },

  title: {
    color: "#0070D9",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 24,
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#0088FF",
    borderRadius: 8,
    height: 42,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  forgot: {
    color: "#0070D9",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#087BDC",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
  },

  outlineButton: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#087BDC",
    justifyContent: "center",
    marginBottom: 10,
  },

  outlineText: {
    color: "#087BDC",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
  },

  terms: {
    color: "#087BDC",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 20,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#087BDC",
  },

  dividerText: {
    color: "#087BDC",
    fontSize: 11,
    marginHorizontal: 10,
  },

  googleButton: {
    backgroundColor: "#E5F6FF",
    borderRadius: 8,
    paddingVertical: 14,
  },

  googleText: {
    color: "#087BDC",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },
});