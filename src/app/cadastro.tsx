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

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function fazerCadastro() {
    try {
      if (!nome || !sobrenome || !email || !senha) {
        Alert.alert("Atenção", "Preencha nome, sobrenome, e-mail e senha.");
        return;
      }

      if (senha.length < 6) {
        Alert.alert("Atenção", "A senha deve ter pelo menos 6 caracteres.");
        return;
      }

      setCarregando(true);

      const nomeCompleto = `${nome} ${sobrenome}`;

      const resposta = await apiFetch("/auth/register", {
        method: "POST",
        body: JSON.stringify({
          nome: nomeCompleto,
          email,
          senha,
          telefone,
        }),
      });

      console.log("Cadastro realizado:", resposta);

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      router.push("/login");
    } catch (error: any) {
      Alert.alert("Erro no cadastro", error.message);
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
          <Text style={styles.title}>Faça seu cadastro</Text>

          <TextInput
            placeholder="Nome"
            placeholderTextColor="#999"
            style={styles.input}
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            placeholder="Sobrenome"
            placeholderTextColor="#999"
            style={styles.input}
            value={sobrenome}
            onChangeText={setSobrenome}
          />

          <TextInput
            placeholder="Número Whatsapp"
            placeholderTextColor="#999"
            style={styles.input}
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />

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

          <TouchableOpacity
            style={styles.button}
            onPress={fazerCadastro}
            disabled={carregando}
          >
            <Text style={styles.buttonText}>
              {carregando ? "Cadastrando..." : "Continuar"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text style={styles.loginText}>Já possui uma conta? Entre</Text>
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
    backgroundColor: "#fff",
    borderRadius: 32,
    overflow: "hidden",
  },
  header: {
    height: 230,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
  },
  logoText: {
    color: "#0070d9",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
  },
  content: {
    paddingHorizontal: 34,
    marginTop: 42,
  },
  title: {
    color: "#0070d9",
    fontSize: 22,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 28,
  },
  input: {
    height: 42,
    borderWidth: 1.5,
    borderColor: "#0088ff",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 12,
  },
  button: {
    height: 46,
    borderWidth: 1.5,
    borderColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: "#087bdc",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 1,
  },
  loginText: {
    color: "#087bdc",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 12,
  },
});