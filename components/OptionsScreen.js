import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

const OptionsScreen = () => {
  const [options, setOptions] = useState([
    { id: '1', title: 'Cuenta' },
    { id: '1', title: 'mis favoritos' },
    { id: '2', title: 'Notificaciones' },
    { id: '6', title: 'Cerrar sesion' },
    
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Opciones de Configuración</Text>
      <FlatList
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10,
  },
  optionItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
  },
});

export default OptionsScreen;
