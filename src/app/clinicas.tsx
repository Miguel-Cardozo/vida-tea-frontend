import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Clinicas() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>VIDA{"\n"}TEA</Text>
          <Text style={styles.avatar}>👤</Text>
        </View>

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Redes de Serviços e especialistas</Text>

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Buscar por localidade"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
          <Text style={styles.searchIcon}>⌕</Text>
        </View>

        <Text style={styles.filter}>dentro de 500m</Text>

        <View style={styles.map}>
          <Text style={styles.mapText}>🗺️</Text>
          <Text style={styles.pin}>📍</Text>
        </View>

        <View style={styles.clinicCard}>
          <Text style={styles.clinicTitle}>Clínica B ⭐⭐⭐⭐⭐</Text>
          <Text style={styles.clinicText}>
            Lorem ipsum dolor sit amet. Atendimento especializado para TEA,
            com equipe profissional.
          </Text>

          <View style={styles.buttonsRow}>
            <Text style={styles.smallButton}>LIGAR</Text>
            <Text style={styles.smallButton}>ROTAS</Text>
            <Text style={styles.smallButton}>WHATSAPP</Text>
          </View>
        </View>

        <View style={styles.clinicCard}>
          <Text style={styles.clinicTitle}>Clínica C ⭐⭐⭐⭐⭐</Text>
          <Text style={styles.clinicText}>
            Lorem ipsum dolor sit amet. Profissionais e serviços especializados.
          </Text>

          <View style={styles.buttonsRow}>
            <Text style={styles.smallButton}>LIGAR</Text>
            <Text style={styles.smallButton}>ROTAS</Text>
            <Text style={styles.smallButton}>WHATSAPP</Text>
          </View>
        </View>

        <View style={styles.bottomMenu}>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text style={styles.menuIcon}>⌂</Text>
          </TouchableOpacity>
          <Text style={styles.menuIcon}>👤</Text>
          <Text style={styles.menuIcon}>💬</Text>
          <Text style={styles.menuIcon}>⚙️</Text>
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
    paddingHorizontal: 20,
  },
  topBar: {
    height: 70,
    backgroundColor: "#fff",
    marginHorizontal: -20,
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
  avatar: {
    fontSize: 26,
  },
  back: {
    color: "#087bdc",
    fontSize: 34,
    marginTop: 10,
  },
  title: {
    color: "#087bdc",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 14,
  },
  searchBox: {
    height: 42,
    backgroundColor: "#fff",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#bbb",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 8,
  },
  searchInput: {
    flex: 1,
    height: 42,
    fontSize: 12,
  },
  searchIcon: {
    fontSize: 22,
    color: "#444",
  },
  filter: {
    alignSelf: "flex-start",
    color: "#087bdc",
    borderWidth: 1,
    borderColor: "#087bdc",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 10,
    marginBottom: 12,
  },
  map: {
    height: 210,
    backgroundColor: "#eee",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  mapText: {
    fontSize: 70,
  },
  pin: {
    position: "absolute",
    top: 55,
    right: 120,
    fontSize: 32,
  },
  clinicCard: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  clinicTitle: {
    fontSize: 15,
    fontWeight: "900",
    color: "#333",
    marginBottom: 5,
  },
  clinicText: {
    fontSize: 10,
    color: "#555",
    lineHeight: 13,
    marginBottom: 10,
  },
  buttonsRow: {
    flexDirection: "row",
    gap: 8,
  },
  smallButton: {
    backgroundColor: "#087bdc",
    color: "#fff",
    fontSize: 10,
    fontWeight: "900",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  bottomMenu: {
    position: "absolute",
    bottom: 18,
    left: 55,
    right: 55,
    height: 52,
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  menuIcon: {
    fontSize: 24,
    color: "#087bdc",
  },
});