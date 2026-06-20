import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home() {
  const [nomeUsuario, setNomeUsuario] = useState("Usuário");
  const [avatar, setAvatar] = useState("👤");

  useEffect(() => {
    async function carregarUsuario() {
      const usuarioSalvo = await AsyncStorage.getItem("usuario");

      if (usuarioSalvo) {
        const usuario = JSON.parse(usuarioSalvo);
        setNomeUsuario(usuario.nome || "Usuário");
        setAvatar(usuario.avatar || "👤");
      }
    }

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

          <TouchableOpacity
            style={styles.avatar}
            onPress={() => router.push("/perfil")}
          >
            <Text style={styles.avatarText}>{avatar}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeText}>
            Olá {nomeUsuario},{"\n"}
            o que você está{"\n"}
            procurando hoje?
          </Text>

          <Image
            source={require("../../assets/images/quebracabeca.jpeg")}
            style={styles.puzzleImage}
          />
        </View>

        <View style={styles.grid}>
          <TouchableOpacity style={styles.card} onPress={() => router.push("/duvidas")}>
            <Image source={require("../../assets/images/duvidas.jpeg")} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Tire suas dúvidas{"\n"}com especialistas</Text>
              <View style={styles.divider} />
              <Text style={styles.cardText}>Tenha acesso a profissionais da saúde para esclarecimentos.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => router.push("/beneficios")}>
            <Image source={require("../../assets/images/beneficios.jpeg")} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Solicitação de{"\n"}Benefícios</Text>
              <View style={styles.divider} />
              <Text style={styles.cardText}>Solicitação de benefícios, downloads e modelos de documentos.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => router.push("/clinicas")}>
            <Image source={require("../../assets/images/rede.jpeg")} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Rede de Serviços e{"\n"}Especialistas</Text>
              <View style={styles.divider} />
              <Text style={styles.cardText}>Busca geolocalizada de profissionais e centros de apoio.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => router.push("/informacoes")}>
            <Image source={require("../../assets/images/informacoes.jpeg")} style={styles.cardImage} />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Central de{"\n"}Informações</Text>
              <View style={styles.divider} />
              <Text style={styles.cardText}>Artigos, vídeos e orientações atualizadas sobre o universo do TEA.</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomMenu}>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Image source={require("../../assets/images/home.jpeg")} style={styles.menuImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/perfil")}>
            <Image source={require("../../assets/images/perfil.jpeg")} style={styles.menuImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/grupo")}>
            <Image source={require("../../assets/images/zap.jpeg")} style={styles.menuImage} />
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

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 22,
  },

  welcomeCard: {
    height: 112,
    backgroundColor: "#FFF",
    marginHorizontal: 18,
    marginTop: 12,
    borderRadius: 14,
    paddingLeft: 20,
    paddingRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },

  welcomeText: {
    color: "#087BDC",
    fontSize: 18,
    fontWeight: "900",
    lineHeight: 23,
    flex: 1,
  },

  puzzleImage: {
    width: 105,
    height: 105,
    resizeMode: "contain",
    marginRight: -18,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
    marginTop: 20,
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 160,
    backgroundColor: "#FFF",
    borderRadius: 12,
    marginBottom: 18,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 5,
  },

  cardImage: {
    width: "100%",
    height: 72,
    resizeMode: "cover",
  },

  cardBody: {
    paddingHorizontal: 9,
    paddingTop: 6,
  },

  cardTitle: {
    color: "#222",
    fontSize: 12,
    fontWeight: "900",
    lineHeight: 14,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#087BDC",
    marginVertical: 5,
  },

  cardText: {
    color: "#555",
    fontSize: 9,
    lineHeight: 11,
  },

  bottomMenu: {
    position: "absolute",
    bottom: 18,
    width: 180,
    height: 48,
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderRadius: 18,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 8,
  },

  menuImage: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
});