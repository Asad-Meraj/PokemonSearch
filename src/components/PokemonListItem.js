// components/PokemonListItem.js

import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PokemonListItem = ({ name, onPress }) => {
  return (
    <Text style={styles.pokemonItem} onPress={onPress}>{name}</Text>
  );
};

const styles = StyleSheet.create({
  pokemonItem: {
    fontSize: 18,
    marginBottom: 10,
    color: 'blue',
  },
});

export default PokemonListItem;
