import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import PokemonListItem from '../../components/PokemonListItem';

describe('PokemonListItem Component', () => {
  const mockName = 'ditto';
  const mockOnPress = jest.fn();
// check if the searched name renders correctly for given pokemon name
  test('Renders correctly with the provided name', () => {
    const { getByText } = render(<PokemonListItem name={mockName} onPress={mockOnPress} />);
    expect(getByText('ditto')).toBeTruthy();
  });
// check if the onPress function works
  test('Calls onPress function when pressed', () => {
    const { getByText } = render(<PokemonListItem name={mockName} onPress={mockOnPress} />);
    fireEvent.press(getByText('ditto'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
