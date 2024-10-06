import { Text, View, StyleSheet, Image,Button, TextInput } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

function pagina3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textOverlay}>
      </Text>
      <View style={styles.imageContainer}>

        <Image style={styles.logo} source={require('../assets/collage2.jpg')} />

        <Image style={styles.imagen_miniatura} source={require('../assets/gta.jpeg')} />
        <Image style={styles.imagen_pegui} source={require('../assets/pegui.jpeg')} />

        <Text style={styles.descripcion}>La historia del juego trascurre en el estado ficticio de San Andreas, basado en la zona suroeste estadounidense. Ambientado en 1992, San Andreas cuenta la historia de Carl Johnson, quien decide volver a Los Santos tras cinco años de haberse establecido en Liberty City. Su trama se basa, de modo muy abierto, en sucesos como la rivalidad entre las pandillas Bloods y Crips, la epidemia de crack que hubo en esa época y los disturbios de Los Ángeles de 1992. Grand Theft Auto: San Andreas recibió la aprobación de la crítica. En el sitio web Metacritic, el juego posee un puntaje promedio de 95 sobre 100 para la plataforma PlayStation 2. Las versiones de Windows y Xbox, por su parte, tienen una puntuación de 93 sobre 100. Asimismo, en dicha web el título se presenta como el quinto juego mejor punteado de PS2.  Grand Theft Auto: San Andreas está estructurado de manera similar a los títulos anteriores de la serie. El núcleo del juego consiste en elementos de un título de disparos en tercera persona y conducción, así como el ambiente de mundo abierto, que permite libertad de movimientos. El personaje del jugador es capaz de desplazarse a pie y saltar, así como utilizar armas y combatir cuerpo a cuerpo. Por primera vez en la serie, el jugador puede nadar, bucear y trepar.</Text>

<Text style={styles.titulo}>                                                                          TITULO: GRAND THEFT AUTO SANANDREAS</Text>

<Text style={styles.desarrollador}>                                                                                DESAROLLADORA: ROCKSTAR GAMES</Text>

<Text style={styles.plataforma}>                                                                                                 PLATAFORMA: PS2</Text>

          <Button
            title="regresar "
            onPress={() => navigation.navigate('pagina2')}
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
    height: 810,
    width: 860,
    border: '4px solid black',
    margin: 0,
    borderWidth: 1,
    borderColor: 'black',
  },
    imagen_miniatura: {
    height: 450,
    width: 350,
    position: 'absolute',
    top: 95,
    left: 30,
    border: '3px solid white',

  }, 
  
     imagen_pegui: {
    height:90,
    width:70,
    position: 'absolute',
    top: 480,
    left: 350,
    border: '3px solid white',

  }, descripcion: {
    position: 'absolute',
    top: 600,
    left: 10,
    right: 10,
    color: 'white',
    backgroundColor: 'black',
    border: '2px solid white',


  },  titulo: {
    position: 'absolute',
    top: 21,
    left: 0,
    right: 10,
    backgroundColor: 'black',

    color: 'white',

  },
  desarrollador: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 10,
    color: 'white',
        backgroundColor: 'black',


  },
  plataforma: {
    position: 'absolute',
    top: 59,
    left: 0,
    right: 10,
    color: 'white',
        backgroundColor: 'black',


  },
});

export default pagina3;
