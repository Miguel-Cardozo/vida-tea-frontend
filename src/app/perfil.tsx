import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Perfil() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>VIDA{"\n"}TEA</Text>
          <Text style={styles.avatarSmall}>👤</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <View style={styles.card}>
          <View style={styles.photo}>
            <Text style={styles.photoIcon}>👩</Text>
          </View>

          <Text style={styles.name}>Veridiana Patussi</Text>

          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editText}>Editar Perfil</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Suas informações 🔒</Text>

          <Text style={styles.label}>Nome</Text>
          <TextInput value="Veridiana Patussi" style={styles.input} />

          <View style={styles.row}>
            <View style={styles.half}>
              <Text style={styles.label}>Gênero</Text>
              <TextInput value="Feminino" style={styles.input} />
            </View>

            <View style={styles.half}>
              <Text style={styles.label}>Data de Nascimento</Text>
              <TextInput value="09/04/1990" style={styles.input} />
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton}>
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
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    width: 390,
    height: 844,
    backgroundColor: "#EAF8FF",
    borderRadius: 32,
    overflow: "hidden",
  },
  topBar: {
    height: 70,
    backgroundColor: "#fff",
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    color: "#087bdc",
    fontSize: 14,
    fontWeight: "900",
    lineHeight: 15,
  },
  avatarSmall: {
    fontSize: 26,
  },
  back: {
    color: "#087bdc",
    fontSize: 34,
    marginLeft: 20,
    marginTop: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 15,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 26,
    alignItems: "center",
  },
  photo: {
    width: 105,
    height: 105,
    borderRadius: 55,
    backgroundColor: "#ddd",
    marginTop: -45,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#fff",
  },
  photoIcon: {
    fontSize: 48,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#087bdc",
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 18,
    marginTop: 12,
  },
  editText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 12,
  },
  sectionTitle: {
    alignSelf: "flex-start",
    color: "#087bdc",
    fontWeight: "800",
    marginTop: 35,
    marginBottom: 18,
  },
  label: {
    alignSelf: "flex-start",
    color: "#087bdc",
    fontWeight: "800",
    fontSize: 12,
    marginBottom: -2,
    backgroundColor: "#fff",
    zIndex: 2,
    marginLeft: 10,
    paddingHorizontal: 4,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1.5,
    borderColor: "#087bdc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    color: "#333",
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
    height: 48,
    backgroundColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: 4,
  },
  saveText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
}); 