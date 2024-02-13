import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from '../../components/SearchBar';

describe('SearchBar Component', () => {
  const mockValue = 'ditto';
  const mockOnChangeText = jest.fn();
  const mockOnSearch = jest.fn();

  test('Renders correctly with provided props', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchBar value={mockValue} onChangeText={mockOnChangeText} onSearch={mockOnSearch} />
    );
    expect(getByPlaceholderText('Enter Pokemon Name')).toBeTruthy();
    expect(getByText('Search')).toBeTruthy();
  });

  test('TextInput value changes correctly when onChangeText is called', () => {
    const { getByPlaceholderText } = render(
      <SearchBar value={mockValue} onChangeText={mockOnChangeText} onSearch={mockOnSearch} />
    );
    fireEvent.changeText(getByPlaceholderText('Enter Pokemon Name'), 'Charmander');
    expect(mockOnChangeText).toHaveBeenCalledWith('Charmander');
  });

  test('onSearch function is called when search button is pressed', () => {
    const { getByText } = render(
      <SearchBar value={mockValue} onChangeText={mockOnChangeText} onSearch={mockOnSearch} />
    );
    fireEvent.press(getByText('Search'));
    expect(mockOnSearch).toHaveBeenCalled();
  });
});