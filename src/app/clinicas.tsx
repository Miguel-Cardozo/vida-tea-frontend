import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { apiFetch } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Clinica = {
  id: number;
  nome: string;
  endereco: string;
  cidade: string;
  telefone: string | null;
  descricao: string;
  latitude: number | null;
  longitude: number | null;
  maps_url: string | null;
};

export default function Clinicas() {
  const [clinicas, setClinicas] = useState<Clinica[]>([]);
  const [busca, setBusca] = useState("");
  const [carregando, setCarregando] = useState(true);
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

  async function carregarClinicas() {
    try {
      setCarregando(true);
      const dados = await apiFetch("/clinicas");
      setClinicas(dados);
    } catch (error: any) {
      Alert.alert("Erro", error.message || "Erro ao carregar clínicas.");
    } finally {
      setCarregando(false);
    }
  }

  function abrirMapa(clinica: Clinica) {
    if (clinica.latitude && clinica.longitude) {
      Linking.openURL(
        `https://www.google.com/maps/search/?api=1&query=${clinica.latitude},${clinica.longitude}`
      );
      return;
    }

    if (clinica.maps_url) {
      Linking.openURL(clinica.maps_url);
      return;
    }

    Alert.alert(
      "Localização indisponível",
      "Essa clínica não possui localização cadastrada."
    );
  }

  function ligar(telefone: string | null) {
    if (!telefone) {
      Alert.alert(
        "Telefone indisponível",
        "Essa clínica não possui telefone cadastrado."
      );
      return;
    }

    const telefoneLimpo = telefone.replace(/\D/g, "");
    Linking.openURL(`tel:${telefoneLimpo}`);
  }

  function abrirWhatsapp(telefone: string | null) {
    if (!telefone) {
      Alert.alert(
        "WhatsApp indisponível",
        "Essa clínica não possui WhatsApp cadastrado."
      );
      return;
    }

    const telefoneLimpo = telefone.replace(/\D/g, "");
    Linking.openURL(`https://wa.me/55${telefoneLimpo}`);
  }

  const clinicasFiltradas = clinicas.filter((clinica) => {
    const texto = `${clinica.nome} ${clinica.cidade} ${clinica.endereco}`.toLowerCase();
    return texto.includes(busca.toLowerCase());
  });

  useEffect(() => {
    carregarClinicas();
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

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text style={styles.back}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Redes de Serviços e especialistas</Text>

          <View style={styles.searchBox}>
            <TextInput
              placeholder="Buscar por localidade"
              placeholderTextColor="#777"
              style={styles.searchInput}
              value={busca}
              onChangeText={setBusca}
            />
            <Text style={styles.searchIcon}>⌕</Text>
          </View>

          <Text style={styles.filter}>Clínicas cadastradas</Text>

          <Image
            source={require("../../assets/images/gps.jpeg")}
            style={styles.map}
          />

          {carregando ? (
            <Text style={styles.loading}>Carregando clínicas...</Text>
          ) : clinicasFiltradas.length === 0 ? (
            <Text style={styles.empty}>Nenhuma clínica encontrada.</Text>
          ) : (
            clinicasFiltradas.map((clinica) => (
              <View key={clinica.id} style={styles.clinicCard}>
                <Text style={styles.clinicTitle}>{clinica.nome} ⭐⭐⭐⭐⭐</Text>

                <Text style={styles.clinicText}>
                  {clinica.descricao || "Clínica especializada em atendimento."}
                </Text>

                <Text style={styles.address}>
                  {clinica.endereco} - {clinica.cidade}
                </Text>

                <View style={styles.buttonsRow}>
                  <TouchableOpacity onPress={() => ligar(clinica.telefone)}>
                    <Text style={styles.smallButton}>LIGAR</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => abrirMapa(clinica)}>
                    <Text style={styles.smallButton}>ROTAS</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => abrirWhatsapp(clinica.telefone)}>
                    <Text style={styles.smallButton}>WHATSAPP</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          )}
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

  content: {
    paddingHorizontal: 18,
    paddingBottom: 95,
  },

  back: {
    color: "#087BDC",
    fontSize: 32,
    marginTop: 8,
    marginBottom: 2,
  },

  title: {
    color: "#087BDC",
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 14,
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
    marginBottom: 8,
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

  filter: {
    alignSelf: "flex-start",
    color: "#087BDC",
    borderWidth: 1,
    borderColor: "#087BDC",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 10,
    marginBottom: 12,
  },

  map: {
    width: "100%",
    height: 210,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#BBB",
    resizeMode: "cover",
    marginBottom: 14,
  },

  loading: {
    color: "#087BDC",
    fontWeight: "800",
    textAlign: "center",
    marginTop: 20,
  },

  empty: {
    color: "#087BDC",
    fontWeight: "800",
    textAlign: "center",
    marginTop: 20,
  },

  clinicCard: {
    backgroundColor: "#FFF",
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
    marginBottom: 6,
  },

  address: {
    fontSize: 10,
    color: "#087BDC",
    fontWeight: "700",
    marginBottom: 10,
  },

  buttonsRow: {
    flexDirection: "row",
    gap: 8,
  },

  smallButton: {
    backgroundColor: "#087BDC",
    color: "#FFF",
    fontSize: 10,
    fontWeight: "900",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
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