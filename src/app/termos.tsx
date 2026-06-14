import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Termos() {
  const [aceito, setAceito] = useState(false);

  return (
    <View style={styles.background}>
      <View style={styles.phone}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>TERMOS DE USO - VIDA TEA</Text>

          <Text style={styles.update}>Última atualização: junho de 2026</Text>

          <Text style={styles.text}>
            Bem-vindo(a) ao Vida TEA!{"\n\n"}
            Este aplicativo tem como objetivo oferecer apoio, informação e facilitar o acesso a recursos relacionados ao Transtorno do Espectro Autista (TEA).{"\n\n"}
            Ao utilizar o aplicativo, você concorda com estes Termos de Uso e com a Política de Privacidade.
          </Text>

          <Text style={styles.subtitle}>1. Objetivo do aplicativo</Text>
          <Text style={styles.text}>
            O Vida TEA auxilia pais, familiares, responsáveis e pessoas interessadas no tema, reunindo informações sobre direitos, serviços, benefícios, centros de apoio e conteúdos educativos sobre o TEA.
          </Text>

          <Text style={styles.subtitle}>2. Uso permitido</Text>
          <Text style={styles.text}>
            O usuário deve utilizar o aplicativo de forma ética e responsável, não podendo divulgar informações falsas, ofensivas, discriminatórias ou que violem direitos de terceiros.
          </Text>

          <Text style={styles.subtitle}>3. Cadastro e informações</Text>
          <Text style={styles.text}>
            Ao se cadastrar, o usuário deve fornecer dados verdadeiros, como nome e e-mail. Essas informações serão utilizadas apenas para identificação e funcionamento do aplicativo.
          </Text>

          <Text style={styles.subtitle}>4. Conteúdo informativo</Text>
          <Text style={styles.text}>
            Os conteúdos disponibilizados possuem caráter informativo e educativo, não substituindo orientação médica, psicológica, jurídica ou profissional.
          </Text>

          <Text style={styles.subtitle}>5. Privacidade e LGPD</Text>
          <Text style={styles.text}>
            O Vida TEA respeita a Lei Geral de Proteção de Dados. As informações dos usuários não serão vendidas e serão utilizadas apenas para melhorar a experiência no app.
          </Text>

          <Text style={styles.subtitle}>6. Alterações</Text>
          <Text style={styles.text}>
            Estes termos podem ser atualizados periodicamente. O uso contínuo do aplicativo após alterações representa concordância com os novos termos.
          </Text>

          <TouchableOpacity style={styles.checkRow} onPress={() => setAceito(!aceito)}>
            <Text style={styles.checkbox}>{aceito ? "☑" : "☐"}</Text>
            <Text style={styles.checkText}>
              Li e concordo com os Termos de Uso e a Política de Privacidade
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, !aceito && styles.buttonDisabled]}
            disabled={!aceito}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </ScrollView>
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
    backgroundColor: "#fff",
    borderRadius: 32,
    overflow: "hidden",
  },
  content: {
    padding: 28,
    paddingBottom: 40,
  },
  title: {
    color: "#087bdc",
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 18,
  },
  update: {
    fontSize: 11,
    fontStyle: "italic",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "900",
    marginTop: 14,
    marginBottom: 6,
  },
  text: {
    fontSize: 12,
    lineHeight: 17,
    color: "#222",
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 26,
    marginBottom: 18,
  },
  checkbox: {
    fontSize: 24,
    color: "#087bdc",
    marginRight: 10,
  },
  checkText: {
    flex: 1,
    fontSize: 12,
    color: "#222",
  },
  button: {
    height: 48,
    backgroundColor: "#087bdc",
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonDisabled: {
    backgroundColor: "#9acbf3",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
  },
});