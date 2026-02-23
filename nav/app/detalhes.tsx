import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.courseTitle}>Curso de Programação</Text>

        <Text style={styles.text}>
          Formação completa em lógica, JavaScript,
          desenvolvimento web e criação de aplicativos.
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.info}>⏱ 40 horas</Text>
          <Text style={styles.info}>💰 R$ 299,00</Text>
        </View>
      </View>

      <Link href="/cursos" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Voltar para Cursos</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 30,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#eff6ff',
    padding: 15,
    borderRadius: 12,
  },
  info: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});