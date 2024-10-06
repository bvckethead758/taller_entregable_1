import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';

export default function QuizScreen() {
  const [answer, setAnswer] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: ''
  });

  const [allAnswered, setAllAnswered] = useState(false);

  const putAnswer = (addAnswer, value) => {
    setAnswer(prevAnswers => ({
      ...prevAnswers,
      [addAnswer]: value
    }));
  };

  const allQuestionsAnswered = () => {
    return Object.values(answer).every(answer => answer.trim() !== '');
  };

  const handleSubmit = () => {
    if (allQuestionsAnswered()) {
      console.log('Respuestas enviadas:', answer);
      setAllAnswered(true);
    } else {
      alert('Por favor, responde a todas las preguntas');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <View style={styles.quizContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿Cuál es tu juego favorito?</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe tu respuesta"
            value={answer.answer1}
            onChangeText={text => putAnswer('answer1', text)}
          />
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿como te gusta mas jugar? </Text>
          <RadioButton.Group
            onValueChange={value => putAnswer('answer2', value)}
            value={answer.answer2}
          >

            <RadioButton.Item label="solo" value="talvez eso sea porque no tienes amigos" />
            <RadioButton.Item label="con amigos" value="me gusta jugar con un amigo" />
            <RadioButton.Item label="solo y con amigos" value="solo y con amigos" />

          </RadioButton.Group>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>¿como te gustan mas los juegos? </Text>
          <RadioButton.Group
            onValueChange={value => putAnswer('answer3', value)}
            value={answer.answer3}
          >
            <RadioButton.Item label="2D" value="2D" />
            <RadioButton.Item label="3D" value="3D" />
            <RadioButton.Item label="2D y 3D" value="2D y 3D" />

          </RadioButton.Group>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>que buscas en un juego?</Text>
          <RadioButton.Group
            onValueChange={value => putAnswer('answer4', value)}
            value={answer.answer4}
          >
            <RadioButton.Item label="mejores graficos" value="mejores graficos" />
            <RadioButton.Item label="mejor jugabilidad" value="eres un desquisiado que no le importa jugar a 8 bits" />
            <RadioButton.Item label="optimizacion" value="respuesta enviada" />
            <RadioButton.Item label="todas las anteriores" value="respuesta enviada" />


          </RadioButton.Group>
        </View>

        <Button title="Enviar respuestas" onPress={handleSubmit} />

        {allAnswered ? (
          <View style={styles.resultContainer}>
            <Text>Respuesta 1: {answer.answer1}</Text>
            <Text>Respuesta 2: {answer.answer2}</Text>
            <Text>Respuesta 3: {answer.answer3}</Text>
            <Text>Respuesta 4: {answer.answer4}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Por favor, responde todas las preguntas</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 50, // Esto permite espacio suficiente al final para que el contenido no quede "cortado".
  },
  quizContainer: {
    padding: 10,
  },
  questionContainer: {
    marginVertical: 15,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  resultContainer: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    textAlign: 'center',
  },
});
