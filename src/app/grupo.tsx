import { useEffect, useState } from "react";
import{
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Grupo() {
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
  function abrirWhatsapp() {
    Linking.openURL("https://chat.whatsapp.com/BWrm3p4pYIqKZTjM3Pji6i?mode=gi_t");
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

        <View style={styles.card}>
          <Text style={styles.title}>
            Faça parte do grupo de{"\n"}
            acolhimento no Whatsapp
          </Text>

          <Text style={styles.text}>
            Às vezes, a sua dúvida pode ser a experiência de outra pessoa que
            pode te ajudar.{"\n\n"}
            Se precisar desabafar ou conversar, estamos aqui para ouvir e
            acolher. Todos enfrentamos dias difíceis, e compartilhar pode fazer
            uma grande diferença.{"\n\n"}
            Sabemos que muitas famílias atípicas se sentem sozinhas. Este espaço
            é para nos apoiarmos, acolhermos e criarmos laços de amizade e
            compreensão.{"\n\n"}
            Também é permitido divulgar doações de medicamentos, com apresentação
            de receita médica, fraldas, alimentos, roupas e calçados.
          </Text>

          <TouchableOpacity style={styles.button} onPress={abrirWhatsapp}>
            <Text style={styles.buttonText}>Quero participar!</Text>
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

  back: {
    color: "#087BDC",
    fontSize: 32,
    marginLeft: 18,
    marginTop: 8,
  },

  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 28,
    paddingHorizontal: 28,
    paddingVertical: 30,
    alignItems: "center",
  },

  title: {
    color: "#087BDC",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 26,
    lineHeight: 25,
  },

  text: {
    color: "#111",
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
    marginBottom: 26,
  },

  button: {
    width: "100%",
    height: 46,
    backgroundColor: "#087BDC",
    borderRadius: 8,
    justifyContent: "center",
  },

  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
});