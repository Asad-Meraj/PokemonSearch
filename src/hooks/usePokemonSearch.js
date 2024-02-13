import { useState } from 'react';
import axios from 'axios';

const usePokemonSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
      setSearchResults([response.data]);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError('Pokemon not found');
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    loading,
    error,
    fetchPokemonData,
  };
};

export default usePokemonSearch;