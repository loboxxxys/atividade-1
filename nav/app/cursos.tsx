import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Cursos() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Cursos Disponíveis</Text>

      {[
        {
          title: 'Curso de Programação',
          desc: 'Aprenda JavaScript e desenvolvimento moderno.',
        },
        {
          title: 'Curso de Design',
          desc: 'Design gráfico e experiência do usuário.',
        },
        {
          title: 'Curso de Marketing Digital',
          desc: 'Estratégias e campanhas digitais eficientes.',
        },
      ].map((course, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.text}>{course.desc}</Text>

          <Link href="/detalhes" asChild>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </Link>
        </View>
      ))}

      <Link href="/" asChild>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    marginBottom: 15,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 10,
  },
  backButton: {
    backgroundColor: '#64748b',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});