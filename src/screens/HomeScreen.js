import React, { useState } from 'react';
import { View, Text, FlatList, Modal, ActivityIndicator, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import PokemonListItem from '../components/PokemonListItem';
import PokemonDetailModal from '../components/PokemonDetailModal';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { appColor } from '../constants/colors';

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
        setSelectedPokemon(item); 
        setModalVisible(true); 
      }}
    />
  );
  

  return (
    <View style={styles.container} >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
  },
});

export default HomeScreen;