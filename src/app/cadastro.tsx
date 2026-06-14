import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Cadastro() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.header}>
          <Text style={styles.logoText}>VIDA{"\n"}TEA</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Faça seu cadastro</Text>

          <TextInput placeholder="Nome" placeholderTextColor="#999" style={styles.input} />
          <TextInput placeholder="Sobrenome" placeholderTextColor="#999" style={styles.input} />
          <TextInput placeholder="Número Whatsapp" placeholderTextColor="#999" style={styles.input} />
          <TextInput placeholder="E-mail" placeholderTextColor="#999" style={styles.input} />
          <TextInput placeholder="Senha" placeholderTextColor="#999" secureTextEntry style={styles.input} />

          <TouchableOpacity style={styles.button} onPress={() => router.push("/home")}>
            <Text style={styles.buttonText}>Continuar</Text>
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