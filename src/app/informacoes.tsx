import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Informacoes() {
  const itens = [
    { tipo: "PDF", emoji: "📘", titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:" },
    { tipo: "VÍDEOS", emoji: "🎬", titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:" },
    { tipo: "VÍDEOS", emoji: "🎥", titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:" },
    { tipo: "PDF", emoji: "📘", titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:" },
  ];

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

        <Text style={styles.title}>Central de Informações</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
          {itens.map((item, index) => (
            <TouchableOpacity style={styles.card} key={index}>
              <View style={styles.cardTop}>
                <Text style={styles.type}>{item.tipo}</Text>
                <Text style={styles.date}>14/09/2025</Text>
              </View>

              <View style={styles.cardContent}>
                <View style={styles.thumb}>
                  <Text style={styles.thumbEmoji}>{item.emoji}</Text>
                </View>

                <View style={styles.info}>
                  <Text style={styles.cardTitle}>{item.titulo}</Text>
                  <Text style={styles.desc}>
                    Incidência nas políticas públicas e na organização do cuidado
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

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
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 14,
  },
  list: {
    paddingBottom: 95,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 10,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  type: {
    fontSize: 11,
    color: "#333",
    fontWeight: "800",
  },
  date: {
    fontSize: 10,
    color: "#aaa",
  },
  cardContent: {
    flexDirection: "row",
    gap: 10,
  },
  thumb: {
    width: 120,
    height: 70,
    backgroundColor: "#D8F1FF",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  thumbEmoji: {
    fontSize: 34,
  },
  info: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#111",
    marginBottom: 5,
  },
  desc: {
    fontSize: 10,
    color: "#555",
    lineHeight: 13,
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