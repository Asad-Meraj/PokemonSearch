// components/PokemonDetailModal.js

import React from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';

const PokemonDetailModal = ({ pokemon, closeModal }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
        <Text style={styles.text}>Name: {pokemon.name}</Text>
        <Text style={styles.text}>Type: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
        <Text style={styles.text}>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
        <Button title="Close" onPress={closeModal} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default PokemonDetailModal;