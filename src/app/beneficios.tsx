import {  useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage"; 

export default function Beneficios() {
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
  <TouchableOpacity
    style={styles.card}
    onPress={() =>
      Linking.openURL(
        "https://bilheteunico.sptrans.com.br/especial/pessoa-com-deficiencia/"
      )
    }
  >
    <Image
      source={require("../../assets/images/bilhete.jpeg")}
      style={styles.cardImage}
    />
    <Text style={styles.cardTitle}>
      Bilhete Único{"\n"}Especial da Pessoa{"\n"}com Deficiência
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.card}
    onPress={() =>
      Linking.openURL(
        "https://www.gov.br/pt-br/servicos/solicitar-beneficio-assistencial-a-pessoa-com-deficiencia"
      )
    }
  >
    <Image
      source={require("../../assets/images/bpc.jpeg")}
      style={styles.cardImage}
    />
    <Text style={styles.cardTitle}>
      Benefício à Pessoa{"\n"}com Deficiência{"\n"}(BPC/LOAS)
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.card}
    onPress={() =>
      Linking.openURL(
        "https://www.detran.sp.gov.br/detransp/pb/servico/veiculo/solicitar_cartao_para_estacionamento_em_vaga_especial_pcd?id=carta_de_servico_solicitar_cartao_para_estacionamento_em_vaga_especial_pcd"
      )
    }
  >
    <Image
      source={require("../../assets/images/cartao.jpeg")}
      style={styles.cardImage}
    />
    <Text style={styles.cardTitle}>
      Cartão para Vaga{"\n"}Especial PCD
    </Text>
  </TouchableOpacity>

  <TouchableOpacity
    style={styles.card}
    onPress={() => Linking.openURL("https://ciptea.sp.gov.br")}
  >
    <Image
      source={require("../../assets/images/beneficios.jpeg")}
      style={styles.cardImage}
    />
    <Text style={styles.cardTitle}>
      Carteira{"\n"}CIPTEA
    </Text>
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

  searchBox: {
    height: 40,
    backgroundColor: "#FFF",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#BBB",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    marginHorizontal: 18,
    marginBottom: 18,
  },

  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 12,
  },

  searchIcon: {
    fontSize: 22,
    color: "#444",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 18,
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    height: 155,
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
    height: 88,
    resizeMode: "cover",
  },

  cardTitle: {
    color: "#222",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    lineHeight: 14,
    paddingHorizontal: 6,
    paddingTop: 6,
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