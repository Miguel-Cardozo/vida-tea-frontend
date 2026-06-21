import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  Alert,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as WebBrowser from "expo-web-browser";

export default function Informacoes() {
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
  const itens = [
    {
      tipo: "PDF",
      imagem: require("../../assets/images/desigualdades.jpeg"),
      titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:",
      link: "https://revistas.ufrj.br/index.php/desidades/article/view/68499/43509",
    },
    {
      tipo: "VÍDEOS",
      imagem: require("../../assets/images/diagnostico.jpeg"),
      titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:",
      link: "https://youtu.be/ZkFWSDJE9P0",
    },
    {
      tipo: "VÍDEOS",
      imagem: require("../../assets/images/causas.jpeg"),
      titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:",
      link: "https://youtu.be/NNaiwC6tnQQ",
    },
    {
      tipo: "PDF",
      imagem: require("../../assets/images/desigualdades.jpeg"),
      titulo: "A expansão do diagnóstico de autismo no contexto brasileiro atual:",
      link: "https://revistas.ufrj.br/index.php/desidades/article/view/68499/43509",
    },
  ];

    async function abrirLink(link: string) {
    try {
      await WebBrowser.openBrowserAsync(link);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível abrir este link.");
    }
  }

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

        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Central de Informações</Text>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {itens.map((item, index) => (
            <TouchableOpacity
              style={styles.card}
              key={index}
              onPress={() => abrirLink(item.link)}
            >
              <View style={styles.cardTop}>
                <Text style={styles.type}>{item.tipo}</Text>
                <Text style={styles.date}>14/09/2025</Text>
              </View>

              <View style={styles.cardContent}>
                <Image source={item.imagem} style={styles.thumb} />

                <View style={styles.info}>
                  <Text style={styles.cardTitle}>{item.titulo}</Text>

                  <View style={styles.divider} />

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
            <Image
              source={require("../../assets/images/home.jpeg")}
              style={styles.menuImage}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/perfil")}>
            <Image
              source={require("../../assets/images/perfil.jpeg")}
              style={styles.menuImage}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/grupo")}>
            <Image
              source={require("../../assets/images/zap.jpeg")}
              style={styles.menuImage}
            />
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

  back: {
    color: "#087BDC",
    fontSize: 32,
    marginLeft: 18,
    marginTop: 8,
    marginBottom: 2,
  },

  title: {
    color: "#087BDC",
    fontSize: 18,
    fontWeight: "900",
    marginLeft: 18,
    marginBottom: 12,
  },

  list: {
    paddingHorizontal: 18,
    paddingBottom: 95,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    padding: 10,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 5,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 7,
  },

  type: {
    fontSize: 10,
    color: "#333",
    fontWeight: "800",
  },

  date: {
    fontSize: 9,
    color: "#AAA",
  },

  cardContent: {
    flexDirection: "row",
    gap: 10,
  },

  thumb: {
    width: 122,
    height: 68,
    borderRadius: 8,
    resizeMode: "cover",
  },

  info: {
    flex: 1,
  },

  cardTitle: {
    fontSize: 11,
    fontWeight: "900",
    color: "#111",
    lineHeight: 13,
  },

  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#087BDC",
    marginVertical: 4,
  },

  desc: {
    fontSize: 9,
    color: "#555",
    lineHeight: 12,
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