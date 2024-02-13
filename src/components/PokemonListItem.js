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
    marginLeft: 10, 
    marginRight: 10, 
    textAlign: 'center', 
}
});

export default PokemonListItem;