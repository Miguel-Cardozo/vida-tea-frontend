import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.topBar}>
          <Text style={styles.logo}>VIDA{"\n"}TEA</Text>
         <TouchableOpacity onPress={() => router.push("/perfil")}>
  <Text style={styles.avatar}>👤</Text>
</TouchableOpacity>
        </View>

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>
            Olá Veridiana Patussi,{"\n"}
            o que você está{"\n"}
            procurando hoje?
          </Text>
          <Text style={styles.puzzle}>🧩</Text>
        </View>

        <View style={styles.grid}>
         <TouchableOpacity
  style={styles.card}
  onPress={() => router.push("/duvidas")}
>
            <View style={styles.imageFake}>
              <Text style={styles.imageIcon}>🩺</Text>
            </View>
            <Text style={styles.cardTitle}>Tire suas dúvidas{"\n"}com especialistas</Text>
            <Text style={styles.cardText}>
              Tenha acesso a profissionais da saúde para esclarecimentos.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => router.push("/beneficios")}>
            <View style={styles.imageFake}>
              <Text style={styles.imageIcon}>📄</Text>
            </View>
            <Text style={styles.cardTitle}>Solicitação de{"\n"}Benefícios</Text>
            <Text style={styles.cardText}>
              Benefícios, documentos e modelos de documentos.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => router.push("/clinicas")}>
            <View style={styles.imageFake}>
              <Text style={styles.imageIcon}>🏥</Text>
            </View>
            <Text style={styles.cardTitle}>Rede de Serviços e{"\n"}Especialistas</Text>
            <Text style={styles.cardText}>
              Busca geolocalizada de clínicas e profissionais.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.card}
  onPress={() => router.push("/informacoes")}
>
            <View style={styles.imageFake}>
              <Text style={styles.imageIcon}>📚</Text>
            </View>
            <Text style={styles.cardTitle}>Central de{"\n"}Informações</Text>
            <Text style={styles.cardText}>
              Artigos, vídeos e orientações sobre o universo do TEA.
            </Text>
          </TouchableOpacity>
        </View>

       <View style={styles.bottomMenu}>
  <TouchableOpacity onPress={() => router.push("/home")}>
    <Text style={styles.menuIcon}>⌂</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => router.push("/perfil")}>
    <Text style={styles.menuIcon}>👤</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => router.push("/grupo")}>
    <Text style={styles.menuIcon}>💬</Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => router.push("/configuracoes")}>
    <Text style={styles.menuIcon}>⚙️</Text>
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

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },

  welcomeCard: {
    height: 120,
    backgroundColor: "#fff",
    marginHorizontal: 18,
    marginTop: 10,
    borderRadius: 14,
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  welcomeText: {
    color: "#087bdc",
    fontSize: 19,
    fontWeight: "900",
    lineHeight: 24,
  },

  puzzle: {
    fontSize: 55,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
    marginTop: 22,
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 205,
    backgroundColor: "#fff",
    borderRadius: 14,
    marginBottom: 20,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  imageFake: {
    height: 82,
    backgroundColor: "#D8F1FF",
    alignItems: "center",
    justifyContent: "center",
  },

  imageIcon: {
    fontSize: 34,
  },

  cardTitle: {
    color: "#1a1a1a",
    fontSize: 13,
    fontWeight: "800",
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 5,
  },

  cardText: {
    color: "#555",
    fontSize: 10,
    paddingHorizontal: 10,
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