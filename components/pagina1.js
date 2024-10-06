import { Text, View, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina1({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <TextInput style={styles.input} placeholder="        buscar un juego " />
        <Image style={styles.fondo} source={require('../assets/fondo.png')} />
        <TouchableOpacity  onPress={() => navigation.navigate('pagina_resultados_de_busqueda')}>
        <Image style={styles.lupa} source={require('../assets/lupa.jpg')} resizeMode="contain" />
        </TouchableOpacity>                 <TouchableOpacity  onPress={() => navigation.navigate('pagina_resultados_de_busqueda')}>
        </TouchableOpacity> 
        <Image style={styles.esfera_1} source={require('../assets/primera_esfera.jpg')} resizeMode="contain" />
        <Image style={styles.esfera_2} source={require('../assets/2.png')} />
        <Image style={styles.esfera_3} source={require('../assets/3.png')} />
        <Image style={styles.esfera_4} source={require('../assets/4.png')} />
        <Image style={styles.esfera_5} source={require('../assets/5.png')} />
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
  imageContainer: {
    position: 'relative', // Para que los elementos dentro se superpongan
  },
  fondo: {
    height: 850,
    width: 700,
    
    margin: 0,
    border: '3px solid black',
  },
  input: {
    height: 40,
    width: 150,
    left: 350,
    border: '2px solid black',
    borderColor: 'gray',
    borderWidth: 1,
    top: 50,
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
  },
  lupa: {
    height: 60,
    width: 50,
    margin: 6,
    position: 'absolute',
    top: -816,
    left: 493,
  },
  esfera_1: {
    height: 70,
    width: 70,
    margin: 6,
    position: 'absolute',
    top: 660,
    left: 182,
    border: '3px solid black',
  },
  esfera_2: {
    height: 70,
    width: 70,
    margin: 6,
    position: 'absolute',
    top: 660,
    left: 252,
    border: '3px solid black',
  },
  esfera_3: {
    height: 70,
    width: 70,
    margin: 6,
    position: 'absolute',
    top: 660,
    left: 322,
    border: '3px solid black',

    },esfera_4: {
    height: 70,
    width: 70,
    margin: 6,
    position: 'absolute',
    top: 660,
    left: 392,
    border: '3px solid black',
  }, esfera_5: {
    height: 70,
    width: 70,
    margin: 6,
    position: 'absolute',
    top: 660,
    left: 462,
    border: '3px solid black',
  },
});

export default pagina1;
