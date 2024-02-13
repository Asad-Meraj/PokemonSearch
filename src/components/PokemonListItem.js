import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RUBIK_REGULAR } from '../constants/fonts';
import { BLACK } from '../constants/colors';

const PokemonListItem = ({ name, onPress }) => {
  return (
    <Text style={styles.pokemonItem} onPress={onPress}>{name}</Text>
  );
};

const styles = StyleSheet.create({
  pokemonItem: {
    fontSize: 25,
    fontFamily: RUBIK_REGULAR,
    marginBottom: 10,
    color: BLACK,
    marginLeft: 10, // Add some left margin to push the text away from the left edge
    marginRight: 10, // Add some right margin for better spacing
    textAlign: 'center', // Center-align the text within its container
}
});

export default PokemonListItem;