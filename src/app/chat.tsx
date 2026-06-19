import { useState } from "react";
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
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import { apiFetch } from "../services/api";

export default function Chat() {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem() {
    if (!mensagem.trim()) {
      Alert.alert("Atenção", "Digite uma mensagem antes de enviar.");
      return;
    }

    try {
      setCarregando(true);

      await apiFetch("/mensagens", {
        method: "POST",
        body: JSON.stringify({
          nome: "Usuário Vida TEA",
          email: "nao-informado@app.com",
          assunto: "Dúvida enviada pelo aplicativo Vida TEA",
          mensagem,
        }),
      });

      setMensagens((anteriores) => [...anteriores, mensagem]);
      setMensagem("");

      Alert.alert("Sucesso", "Sua mensagem foi enviada para a equipe Vida TEA.");
    } catch (error: any) {
      Alert.alert("Erro", error.message || "Não foi possível enviar a mensagem.");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.background}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
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

        <Text style={styles.title}>Tire suas dúvidas com especialistas</Text>

        <View style={styles.messageRow}>
          <Text style={styles.avatarMini}>👤</Text>
          <Text style={styles.helperText}>
            Preencha o campo abaixo com sua pergunta.
          </Text>
        </View>

        <ScrollView
          style={styles.chatArea}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {mensagens.map((msg, index) => (
            <View key={index} style={styles.messageBox}>
              <Text style={styles.messageText}>{msg}</Text>
            </View>
          ))}

          {mensagens.length > 0 && (
            <Text style={styles.confirmText}>Sua mensagem foi enviada</Text>
          )}
        </ScrollView>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={mensagem}
            onChangeText={setMensagem}
            placeholder="Digite sua mensagem..."
            placeholderTextColor="#777"
            returnKeyType="send"
            onSubmitEditing={enviarMensagem}
            editable={!carregando}
            multiline
          />

          <TouchableOpacity
            onPress={enviarMensagem}
            style={styles.sendButton}
            disabled={carregando}
          >
            <Text style={styles.send}>{carregando ? "..." : "➤"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: "#FFF" },
  phone: { flex: 1, width: "100%", height: "100%", backgroundColor: "#FFF" },

  topBar: {
    height: 70,
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: { width: 95, height: 45, resizeMode: "contain" },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: { fontSize: 24 },

  back: {
    color: "#087BDC",
    fontSize: 34,
    marginLeft: 24,
    marginTop: 20,
  },

  title: {
    color: "#087BDC",
    fontSize: 24,
    fontWeight: "900",
    marginHorizontal: 24,
    marginTop: 25,
    marginBottom: 45,
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 35,
    gap: 20,
  },

  avatarMini: { fontSize: 32 },

  helperText: {
    color: "#777",
    fontSize: 16,
    flex: 1,
  },

  chatArea: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },

  messageBox: {
    alignSelf: "flex-end",
    backgroundColor: "#EAF8FF",
    borderWidth: 1,
    borderColor: "#087BDC",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    maxWidth: "80%",
  },

  messageText: { color: "#333", fontSize: 14 },

  confirmText: {
    alignSelf: "flex-end",
    color: "#087BDC",
    fontSize: 13,
    fontWeight: "800",
    marginTop: 5,
  },

  inputArea: {
    minHeight: 75,
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#087BDC",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginBottom: 25, 
  },

  input: {
    flex: 1,
    minHeight: 50,
    maxHeight: 120,
    fontSize: 16,
    color: "#111",
    paddingVertical: 8,
    textAlignVertical: "center",
  },

  sendButton: {
    width: 42,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
  },

  send: {
    color: "#087BDC",
    fontSize: 28,
    fontWeight: "900",
  },
});