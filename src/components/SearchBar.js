// components/SearchBar.js

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Pokemon Name"
        value={value}
        onChangeText={onChangeText}
      />
       <Button title="Search" onPress={onSearch} style={styles.searchButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10, // Add padding to the container
  },
  input: {
    flex: 1, // Take up remaining space in the container
    height: 40, // Set the height of the input
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5, // Add border radius for rounded corners
    marginRight: 10, // Add some spacing between input and button
  },
  searchButton: {
    backgroundColor: '#007bff', // Set background color
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 10, // Add vertical padding
    borderRadius: 5, // Add border radius for rounded corners
    elevation: 2, // Add shadow for elevation
  },
});

export default SearchBar;
