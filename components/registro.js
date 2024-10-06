import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function registro({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}></Text>
      <View style={styles.imageContainer}>
        <TextInput
          style={styles.input_correo}
          placeholder="                     correo "
        />
        <TextInput
          style={styles.input_usuario}
          placeholder="                    usuario "
        />
        <TextInput
          style={styles.input_contrasena}
          placeholder="                 contraseña "
        />
        <TextInput
          style={styles.input_apodo}
          placeholder="                     apodo "
        />
        <Image style={styles.logo} source={require('../assets/fondo_star.jpg')}  />
        <Button
          title="registrar"
          onPress={() => navigation.navigate('pagina1')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logo: {
    height: 800,
    width: 700,
    margin: 0,
    border: '3px solid black',
  },
  input_correo: {
    height: 30,
    width: 190,
    left: 250,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 150,  position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
  input_usuario: {
    height: 30,
    width: 190,
    left: 250,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 250,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
  input_contrasena: {
    height: 30,
    width: 190,
    left: 250,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 200,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
  input_apodo: {
    height: 30,
    width: 190,
    left: 250,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 300,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
});

export default registro;
