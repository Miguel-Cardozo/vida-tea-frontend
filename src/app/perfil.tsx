import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil() {
  const [editando, setEditando] = useState(false);
  const [nome, setNome] = useState("Usuário");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [genero, setGenero] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  async function carregarUsuario() {
    const usuarioSalvo = await AsyncStorage.getItem("usuario");

    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);

      setNome(usuario.nome || "Usuário");
      setEmail(usuario.email || "");
      setTelefone(usuario.telefone || "");
      setGenero(usuario.genero || "");
      setDataNascimento(usuario.dataNascimento || "");
    }
  }

  async function salvarPerfil() {
    const usuarioAtualizado = {
      nome,
      email,
      telefone,
      genero,
      dataNascimento,
    };

    await AsyncStorage.setItem("usuario", JSON.stringify(usuarioAtualizado));

    setEditando(false);
    Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
  }

  useEffect(() => {
    carregarUsuario();
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Image
            source={require("../../assets/images/logopequeno.jpeg")}
            style={styles.logo}
          />

          <View style={styles.avatarSmall}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.photo}>
            <Text style={styles.photoIcon}>👤</Text>
          </View>

          <Text style={styles.name}>{nome}</Text>

          <TouchableOpacity
            style={styles.editButton}
            onPress={() => setEditando(true)}
          >
            <Text style={styles.editText}>Editar Perfil</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Suas informações 🔒</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput
            value={nome}
            editable={editando}
            onChangeText={setNome}
            style={[styles.input, !editando && styles.inputDisabled]}
          />

          <Text style={styles.label}>E-mail</Text>
          <TextInput
            value={email}
            editable={editando}
            onChangeText={setEmail}
            style={[styles.input, !editando && styles.inputDisabled]}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Telefone</Text>
          <TextInput
            value={telefone}
            editable={editando}
            onChangeText={setTelefone}
            style={[styles.input, !editando && styles.inputDisabled]}
            keyboardType="phone-pad"
          />

          <View style={styles.row}>
            <View style={styles.half}>
              <Text style={styles.label}>Gênero</Text>
              <TextInput
                value={genero}
                editable={editando}
                onChangeText={setGenero}
                placeholder="Ex: Feminino"
                placeholderTextColor="#999"
                style={[styles.input, !editando && styles.inputDisabled]}
              />
            </View>

            <View style={styles.half}>
              <Text style={styles.label}>Nascimento</Text>
              <TextInput
                value={dataNascimento}
                editable={editando}
                onChangeText={setDataNascimento}
                placeholder="00/00/0000"
                placeholderTextColor="#999"
                style={[styles.input, !editando && styles.inputDisabled]}
              />
            </View>
          </View>

          <TouchableOpacity
            style={[
              styles.saveButton,
              !editando && styles.saveButtonDisabled,
            ]}
            onPress={salvarPerfil}
            disabled={!editando}
          >
            <Text style={styles.saveText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#EAF8FF",
  },

  phone: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#EAF8FF",
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

  avatarSmall: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarIcon: {
    fontSize: 22,
  },

  back: {
    color: "#087BDC",
    fontSize: 30,
    marginLeft: 18,
    marginTop: 8,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 10,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 26,
    paddingTop: 0,
    alignItems: "center",
  },

  photo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#DDD",
    marginTop: -35,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FFF",
  },

  photoIcon: {
    fontSize: 42,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },

  editButton: {
    backgroundColor: "#087BDC",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 18,
    marginTop: 12,
  },

  editText: {
    color: "#FFF",
    fontWeight: "800",
    fontSize: 12,
  },

  sectionTitle: {
    alignSelf: "flex-start",
    color: "#087BDC",
    fontWeight: "800",
    marginTop: 20,
    marginBottom: 14,
  },

  label: {
    alignSelf: "flex-start",
    color: "#087BDC",
    fontWeight: "800",
    fontSize: 12,
    marginBottom: 4,
  },

  input: {
    width: "100%",
    height: 43,
    borderWidth: 1.5,
    borderColor: "#087BDC",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    color: "#333",
    backgroundColor: "#FFF",
  },

  inputDisabled: {
    backgroundColor: "#F5F5F5",
  },

  row: {
    flexDirection: "row",
    gap: 12,
  },

  half: {
    flex: 1,
  },

  saveButton: {
    width: "100%",
    height: 46,
    backgroundColor: "#087BDC",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 8,
  },

  saveButtonDisabled: {
    backgroundColor: "#9CCBEF",
  },

  saveText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
});