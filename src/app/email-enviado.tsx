import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";

export default function EmailEnviado() {
  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <Image
          source={require("../../assets/images/logocompleta.jpeg")}
          style={styles.headerImage}
        />

        <View style={styles.content}>
          <Image
            source={require("../../assets/images/email.jpeg")}
            style={styles.emailImage}
          />

          <Text style={styles.title}>E-mail enviado!</Text>

          <Text style={styles.description}>
            Aguarde o e-mail para realizar a{"\n"}
            recuperação de senha.
          </Text>

          <TouchableOpacity
            style={styles.okButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.okText}>OK</Text>
          </TouchableOpacity>

          <Text style={styles.smallText}>
            Caso não receba nosso e-mail em{"\n"}
            alguns minutos, tente reenviar.
          </Text>

          <TouchableOpacity style={styles.reenviarButton}>
            <Text style={styles.reenviarText}>REENVIAR</Text>
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

  headerImage: {
    width: "100%",
    height: 150,
    resizeMode: "stretch",
  },

  content: {
    paddingHorizontal: 34,
    marginTop: 20,
    alignItems: "center",
  },

  emailImage: {
    width: 120,
    height: 80,
    resizeMode: "contain",
    marginBottom: 20,
  },

  title: {
    color: "#087BDC",
    fontSize: 26,
    fontWeight: "900",
    marginBottom: 16,
    textAlign: "center",
  },

  description: {
    color: "#666",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 25,
  },

  okButton: {
    width: "100%",
    height: 46,
    backgroundColor: "#087BDC",
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
    borderColor: "#087BDC",
    borderRadius: 8,
    justifyContent: "center",
  },

  reenviarText: {
    color: "#087BDC",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 16,
    letterSpacing: 1,
  },
});