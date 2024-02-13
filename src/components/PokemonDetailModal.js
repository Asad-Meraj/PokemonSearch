import React from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';
import { lightOrange, BLACK } from '../constants/colors';
import { RUBIK_REGULAR } from '../constants/fonts';

const PokemonDetailModal = ({ pokemon, closeModal }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <View style={styles.overlay}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Image
            source={{ uri: pokemon.sprites.front_default }} 
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.heading}>Pokémon Details</Text>
          <Text style={styles.text}>Name: {pokemon.name}</Text>
          <Text style={styles.text}>Type: {pokemon.types.map(type => type.type.name).join(', ')}</Text>
          <Text style={styles.text}>Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(', ')}</Text>
          <Button title="Close" onPress={closeModal} color={lightOrange} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  content: {
    marginTop: 20,
  },
  heading: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: BLACK,
  },
  text: {
    fontFamily: RUBIK_REGULAR,
    fontSize: 16,
    marginBottom: 10,
    color: BLACK,
  },
});

export default PokemonDetailModal;