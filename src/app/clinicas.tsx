import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { apiFetch } from "../services/api";

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

    Alert.alert("Localização indisponível", "Essa clínica não possui localização cadastrada.");
  }

  function ligar(telefone: string | null) {
    if (!telefone) {
      Alert.alert("Telefone indisponível", "Essa clínica não possui telefone cadastrado.");
      return;
    }

    const telefoneLimpo = telefone.replace(/\D/g, "");
    Linking.openURL(`tel:${telefoneLimpo}`);
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
            value={busca}
            onChangeText={setBusca}
          />
          <Text style={styles.searchIcon}>⌕</Text>
        </View>

        <Text style={styles.filter}>Clínicas cadastradas</Text>

        <View style={styles.map}>
          <Text style={styles.mapText}>🗺️</Text>
          <Text style={styles.pin}>📍</Text>
        </View>

        {carregando ? (
          <Text style={styles.loading}>Carregando clínicas...</Text>
        ) : (
          <ScrollView
            style={styles.list}
            contentContainerStyle={{ paddingBottom: 90 }}
            showsVerticalScrollIndicator={false}
          >
            {clinicasFiltradas.length === 0 ? (
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

                    <TouchableOpacity onPress={() => ligar(clinica.telefone)}>
                      <Text style={styles.smallButton}>WHATSAPP</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </ScrollView>
        )}

        <View style={styles.bottomMenu}>
          <TouchableOpacity onPress={() => router.push("/home")}>
            <Text style={styles.menuIcon}>⌂</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/perfil")}>
            <Text style={styles.menuIcon}>👤</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/chat")}>
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
    height: 160,
    backgroundColor: "#eee",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  mapText: {
    fontSize: 55,
  },
  pin: {
    position: "absolute",
    top: 40,
    right: 120,
    fontSize: 28,
  },
  list: {
    flex: 1,
  },
  loading: {
    color: "#087bdc",
    fontWeight: "800",
    textAlign: "center",
    marginTop: 20,
  },
  empty: {
    color: "#087bdc",
    fontWeight: "800",
    textAlign: "center",
    marginTop: 20,
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
    marginBottom: 6,
  },
  address: {
    fontSize: 10,
    color: "#087bdc",
    fontWeight: "700",
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