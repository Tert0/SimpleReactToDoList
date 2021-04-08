import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('It renders without crash', () => {
  render(<App />);
});


test('It adds a Todo Item', () => {
  render(<App />);
  const inputField = screen.getByTestId('input_field');
  expect(inputField).toBeInTheDocument()
  fireEvent.change(inputField, { target: { value: 'An Todo!' } })
  const addButton = screen.getByTestId('add_button');
  expect(addButton).toBeInTheDocument()
  fireEvent.click(addButton);
  expect(screen.getByText('An Todo!')).toBeInTheDocument()
});

test('It should be empty', () => {
  render(<App />);
  const inputField = screen.getByTestId('input_field');
  expect(inputField.value).toBe('')
});