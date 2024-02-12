// screens/HomeScreen.js

import React, { useState } from 'react';
import { View, Text, FlatList, Modal, ActivityIndicator } from 'react-native';
import SearchBar from '../components/SearchBar';
import PokemonListItem from '../components/PokemonListItem';
import PokemonDetailModal from '../components/PokemonDetailModal';
import usePokemonSearch from '../hooks/usePokemonSearch';

const HomeScreen = () => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    fetchPokemonData,
  } = usePokemonSearch();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const renderPokemonItem = ({ item }) => (
    <PokemonListItem
      name={item.name}
      onPress={() => {
        setSelectedPokemon(item); // Set the selected Pokémon
        setModalVisible(true); // Show the modal
      }}
    />
  );
  

  return (
    <View>
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSearch={fetchPokemonData}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text>{error}</Text>}
      <FlatList
        data={searchResults}
        renderItem={renderPokemonItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <PokemonDetailModal pokemon={selectedPokemon} closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

export default HomeScreen;