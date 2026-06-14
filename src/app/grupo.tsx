import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { router } from "expo-router";

export default function Grupo() {
  function abrirWhatsapp() {
    Linking.openURL("https://wa.me/");
  }

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

        <View style={styles.card}>
          <Text style={styles.title}>
            Faça parte do grupo de{"\n"}
            acolhimento no Whatsapp
          </Text>

          <Text style={styles.text}>
            Às vezes, a sua dúvida pode ser a experiência de
            outra pessoa que pode te ajudar.{"\n\n"}
            Se precisar desabafar ou conversar, estamos aqui para ouvir e acolher.
            Todos enfrentamos dias difíceis, e compartilhar pode fazer uma
            grande diferença.{"\n\n"}
            Sabemos que muitas famílias atípicas se sentem sozinhas.
            Este espaço é para nos apoiarmos, acolhermos e criarmos laços
            de amizade e compreensão.{"\n\n"}
            Também é permitido divulgar doações de medicamentos,
            com apresentação de receita médica, fraldas, alimentos,
            roupas e calçados. Caso tenha algo para doar ou precise de ajuda,
            compartilhe aqui.
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
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 26,
  },
  back: {
    color: "#087bdc",
    fontSize: 34,
    marginLeft: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 28,
    paddingHorizontal: 28,
    paddingVertical: 34,
    alignItems: "center",
  },
  title: {
    color: "#087bdc",
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 25,
  },
  text: {
    color: "#111",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
    marginBottom: 28,
  },
  button: {
    width: "100%",
    height: 46,
    backgroundColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
});