import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PokemonDetailModal from '../../components/PokemonDetailModal';

// Mock data for testing searched Pokemon
const mockPokemon = {
  name: 'ditto',
  sprites: { front_default: 'https://pokeapi.co/api/v2/pokemon/ditto/sprite' },
  types: [{ type: { name: 'normal' } }],
  abilities: [{ ability: { name: 'limber' } }]
};

describe('PokemonDetailModal Component', () => {
   
  test('Renders correctly with Pokemon data', () => {
    const { getByText, getByTestId } = render(<PokemonDetailModal pokemon={mockPokemon} />);
    // This test checks if the modal will render accordingly with provided details of Pokemon
    expect(getByText('Pokémon Details')).toBeTruthy();
    expect(getByText('Name: ditto')).toBeTruthy();
    expect(getByText('Type: normal')).toBeTruthy();
    expect(getByText('Abilities: limber')).toBeTruthy();
  });

  test('Renders nothing when no Pokemon data is provided', () => {
    const { queryByText } = render(<PokemonDetailModal />);
    // This test makes sure modal returns null when no there is no data given
    expect(queryByText('Pokémon Details')).toBeNull();
  });

  test('Calls closeModal function when close button is pressed', () => {
    const closeModalMock = jest.fn();
    const { getByText } = render(<PokemonDetailModal pokemon={mockPokemon} closeModal={closeModalMock} />);
    // Trigger the close button press event
    fireEvent.press(getByText('Close'));
    // This test checks whether the closeModal function is called or not
    expect(closeModalMock).toHaveBeenCalled();
  });
});