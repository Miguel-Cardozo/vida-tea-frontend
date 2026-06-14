import {
  View,
 Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

export default function EmailEnviado() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <View style={styles.header}>
          <Text style={styles.logoText}>
            VIDA{"\n"}TEA
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.icon}>📧✅</Text>

          <Text style={styles.title}>
            E-mail enviado!
          </Text>

          <Text style={styles.description}>
            Aguarde o e-mail para realizar a{"\n"}
            recuperação de senha
          </Text>

          <TouchableOpacity
            style={styles.okButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.okText}>
              OK
            </Text>
          </TouchableOpacity>

          <Text style={styles.smallText}>
            Caso não receba nosso e-mail em{"\n"}
            alguns minutos, tente reenviar
          </Text>

          <TouchableOpacity
            style={styles.reenviarButton}
          >
            <Text style={styles.reenviarText}>
              REENVIAR
            </Text>
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
    backgroundColor: "#FFF",
    borderRadius: 32,
    overflow: "hidden",
  },

  header: {
    height: 230,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 10,
  },

  logoText: {
    color: "#0070d9",
    fontSize: 38,
    fontWeight: "900",
    textAlign: "center",
  },

  content: {
    paddingHorizontal: 34,
    marginTop: 55,
    alignItems: "center",
  },

  icon: {
  fontSize: 55,
  marginBottom: 12,
},

  title: {
    color: "#087bdc",
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 20,
  },

  description: {
    color: "#666",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 25,
  },

  okButton: {
    width: "100%",
    height: 46,
    backgroundColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
    marginBottom: 20,
  },

  okText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 16,
  },

  smallText: {
    color: "#666",
    fontSize: 11,
    textAlign: "center",
    marginBottom: 15,
    lineHeight: 16,
  },

  reenviarButton: {
    width: "100%",
    height: 46,
    borderWidth: 1.5,
    borderColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
  },

  reenviarText: {
    color: "#087bdc",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 16,
    letterSpacing: 1,
  },
});