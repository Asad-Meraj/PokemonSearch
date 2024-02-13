import axios from 'axios';

const fetchPokemon = async (searchQuery) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchQuery.toLowerCase()}`);
    return response.data;
  } catch (error) {
    throw new Error('Pokemon not found');
  }
};

export default fetchPokemon;