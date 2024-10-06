import { Text, View, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina_resulatados_de_busqueda({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>
        <Image style={[styles.logo, styles.rounded]} source={require('../assets/tifa.jpg')} />
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen1, styles.rounded]} source={require('../assets/protector_of_earth.jpg')} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen3, styles.rounded]} source={require('../assets/cosmic_destruction.jpg')}resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen4, styles.rounded]} source={require('../assets/ben.jpg')} resizeMode="contain"/>
        </TouchableOpacity>        
        <TouchableOpacity  onPress={() => navigation.navigate('pagina3')}>
        <Image style={[styles.imagen5, styles.rounded]} source={require('../assets/alien_force.jpg')} resizeMode="contain"/>
        </TouchableOpacity>      </View>



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

    margin: 0,
    borderWidth: 1,
    borderColor: 'black',
  },
  imagen1: {
    height: 170,
    width: 200,
    position: 'absolute',
    top: -800,
    left: 10,
  },
  imagen3: {
    height: 170,
    width: 200,
    position: 'absolute',
    top: -600,
    left: 10,
  },
  imagen4: {
    height: 170,
    width: 200,
    position: 'absolute',
    top: -400,
    left: 10,
  },
  imagen5: {
    height: 170,
    width: 200,
    position: 'absolute',
    top: -200,
    left: 10,
  },
  rounded: {
    borderRadius:0,
  },
});

export default pagina_resulatados_de_busqueda;