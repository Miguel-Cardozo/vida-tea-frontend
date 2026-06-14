import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Beneficios() {
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

        <Text style={styles.title}>Solicitação de Benefícios</Text>

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Qual benefício você procura?"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
          <Text style={styles.searchIcon}>⌕</Text>
        </View>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.card}>
            <View style={styles.imageFake}><Text style={styles.emoji}>🚌</Text></View>
            <Text style={styles.cardTitle}>Bilhete Único{"\n"}Especial da Pessoa{"\n"}com Deficiência</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.imageFake}><Text style={styles.emoji}>👥</Text></View>
            <Text style={styles.cardTitle}>Benefício à Pessoa{"\n"}com Deficiência{"\n"}(BPC/LOAS)</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.imageFake}><Text style={styles.emoji}>🚗</Text></View>
            <Text style={styles.cardTitle}>Cartão para Vaga{"\n"}Especial PCD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View style={styles.imageFake}><Text style={styles.emoji}>🪪</Text></View>
            <Text style={styles.cardTitle}>Carteira{"\n"}CIPTEA</Text>
          </TouchableOpacity>
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
    marginTop: 12,
  },
  title: {
    color: "#087bdc",
    fontSize: 18,
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
    marginBottom: 20,
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    height: 165,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 22,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  imageFake: {
    height: 92,
    backgroundColor: "#D8F1FF",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 38,
  },
  cardTitle: {
    color: "#111",
    fontSize: 13,
    fontWeight: "900",
    textAlign: "center",
    paddingHorizontal: 6,
    paddingTop: 7,
    lineHeight: 16,
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