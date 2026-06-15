import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { apiFetch } from "../services/api";

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
        <View style={styles.header}>
          <Text style={styles.logoText}>VIDA{"\n"}TEA</Text>
        </View>

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
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },

  phone: {
    width: 390,
    height: 844,
    backgroundColor: "#FFF",
    borderRadius: 32,
    overflow: "hidden",
  },

  header: {
    height: 220,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.1,
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
    paddingHorizontal: 28,
    marginTop: 28,
  },

  title: {
    color: "#0070d9",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 24,
  },

  input: {
    borderWidth: 1.5,
    borderColor: "#0088ff",
    borderRadius: 8,
    height: 42,
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  forgot: {
    color: "#0070d9",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "right",
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#087bdc",
    height: 48,
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 16,
  },

  outlineButton: {
    height: 48,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#087bdc",
    justifyContent: "center",
  },

  outlineText: {
    color: "#087bdc",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 16,
  },

  terms: {
    color: "#087bdc",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 22,
  },

  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#087bdc",
  },

  dividerText: {
    color: "#087bdc",
    fontSize: 11,
    marginHorizontal: 10,
  },

  googleButton: {
    backgroundColor: "#E5F6FF",
    paddingVertical: 14,
    borderRadius: 8,
  },

  googleText: {
    color: "#087bdc",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
  },
});