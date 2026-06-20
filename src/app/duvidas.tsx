import {  useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"; 


export default function Duvidas() {
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [avatar, setAvatar] = useState("👤");

  useEffect(() => {
    async function carregarAvatar() {
      const usuarioSalvo = await AsyncStorage.getItem("usuario");

      if (usuarioSalvo) {
        const usuario = JSON.parse(usuarioSalvo);
        setAvatar(usuario.avatar || "👤");
      }
    }

  carregarAvatar();
}, []);

  async function enviarMensagem() {
  if (!mensagem.trim()) {
    Alert.alert("Atenção", "Digite uma mensagem antes de enviar.");
    return;
  }

  setCarregando(true);

  setTimeout(() => {
    Alert.alert("Sucesso", "Sua mensagem foi enviada para a equipe Vida TEA.");
    setMensagem("");
    setCarregando(false);
  }, 800);
}

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Image
            source={require("../../assets/images/logopequeno.jpeg")}
            style={styles.logo}
          />

          <TouchableOpacity style={styles.avatar} onPress={() => router.push("/perfil")}>
            <Text style={styles.avatarText}>{avatar}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Tire suas dúvidas com especialistas</Text>

        <View style={styles.messageRow}>
          <Text style={styles.userIcon}>{avatar}</Text>
          <Text style={styles.helpText}>
            Preencha o campo abaixo com sua pergunta.
          </Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#777"
            style={styles.input}
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            editable={!carregando}
          />

          <TouchableOpacity onPress={enviarMensagem} disabled={carregando}>
            <Text style={styles.send}>{carregando ? "..." : "✈️"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#FFF" },
  phone: { flex: 1, backgroundColor: "#FFF" },

  topBar: {
    height: 58,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: { width: 82, height: 34, resizeMode: "contain" },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: { fontSize: 22 },

  back: {
    color: "#087BDC",
    fontSize: 32,
    marginTop: 8,
    marginLeft: 18,
  },

  title: {
    color: "#087BDC",
    fontSize: 22,
    fontWeight: "900",
    marginTop: 8,
    marginHorizontal: 18,
    marginBottom: 40,
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 18,
  },

  userIcon: {
    fontSize: 28,
    marginRight: 16,
  },

  helpText: {
    color: "#777",
    fontSize: 16,
    flex: 1,
  },

  inputArea: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    minHeight: 70,
    backgroundColor: "#FFF",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#087BDC",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  input: {
    flex: 1,
    minHeight: 45,
    maxHeight: 110,
    fontSize: 16,
    color: "#111",
    paddingVertical: 8,
    textAlignVertical: "top",
  },

  send: {
    fontSize: 24,
    color: "#087BDC",
    marginLeft: 8,
  },
});