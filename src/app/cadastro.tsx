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
      await AsyncStorage.setItem(
        "usuario",
        JSON.stringify({
          nome: '${nome} ${sobrenome}',
          email,
          telefone,
        })
      );

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
        <Image
          source={require("../../assets/images/logocompleta.jpeg")}
          style={styles.headerImage}
        />

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
    backgroundColor: "#FFF",
  },

  phone: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
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
    height: 42,
    borderWidth: 1.5,
    borderColor: "#0088FF",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 12,
  },

  button: {
    height: 46,
    borderWidth: 1.5,
    borderColor: "#087BDC",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 18,
  },

  buttonText: {
    color: "#087BDC",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 1,
  },

  loginText: {
    color: "#087BDC",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 12,
  },
});