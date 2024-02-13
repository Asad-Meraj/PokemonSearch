import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { lightOrange} from '../constants/colors';

const SearchBar = ({ value, onChangeText, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Pokemon Name"
        value={value}
        onChangeText={onChangeText}
      />
       <Button title="Search" onPress={onSearch} color={lightOrange} style={styles.searchButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    paddingHorizontal: 10, 
  },
  input: {
    flex: 1, 
    height: 40, 
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5, 
    marginRight: 10, 
  },
  searchButton: {
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 5, 
  },
});

export default SearchBar;