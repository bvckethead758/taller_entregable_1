import { Text, View, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>
        <Image style={[styles.logo, styles.rounded]} source={require('../assets/tifa.jpg')}resizeMode="contain" />
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen1, styles.rounded]} source={require('../assets/kratos.jpeg')} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen2, styles.rounded]} source={require('../assets/crash.jpg')}resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen3, styles.rounded]} source={require('../assets/jack.jpeg')} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('boton presionado')}>
        <Image style={[styles.imagen4, styles.rounded]} source={require('../assets/ben.jpg')} resizeMode="contain"/>
        </TouchableOpacity>        
        <TouchableOpacity  onPress={() => navigation.navigate('pagina3')}>
        <Image style={[styles.imagen5, styles.rounded]} source={require('../assets/gta.jpeg')}resizeMode="contain" />
        </TouchableOpacity>      </View>

                  <Button
            title="                                regresar                         "
            onPress={() => navigation.navigate('MainTabs')}
          />

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
    height: 120,
    width: 200,
    position: 'absolute',
    top: -840,
    left: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  imagen2: {
    height: 120,
    width: 200,
    position: 'absolute',
    top: -700,
    left: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  imagen3: {
    height: 120,
    width: 200,
    position: 'absolute',
    top: -560,
    left: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  imagen4: {
    height: 120,
    width: 200,
    position: 'absolute',
    top: -420,
    left: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  imagen5: {
    height: 120,
    width: 200,
    position: 'absolute',
    top: -260,
    left: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  rounded: {
    borderRadius:12,
  },
});

export default pagina2;