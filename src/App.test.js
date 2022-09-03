import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';


test('Button Has Correct Initial Color', () => {
  render(<App />);
  // Find an element with a role of button and text of 'Change To Midnight Blue'
  const colorButton = screen.getByRole('button', { name: /Change to Midnight Blue/i });

  // Expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ background: 'MediumVioletRed' });

});

test('Button Has Correct Initial Text', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /Change To Midnight Blue/i });

  // Click The Button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ background: 'MidnightBlue' });

  // Expect The Button Text To Be 'Change To MediumVioletRed'
  expect(colorButton.textContent).toBe('Change To Medium Violet Red');
});

test("Initial Conditions", () => {
  render(<App />);

  // Check That The Button Starts Out Enabled
  const colorButton = screen.getByRole('button', { name: /Change To Midnight Blue/i });

  expect(colorButton).toBeEnabled();

  // Check That The Checkbox Starts Out UnChecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test("Checkbox disables Button On First Click And Enables On Second Click", () => {
  render(<App />);

  const checkBox = screen.getByRole('checkbox', { name: 'Disable Button' });
  const colorButton = screen.getByRole('button', { name: /Change To Midnight Blue/i });

  fireEvent.click(checkBox);

  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);

  expect(colorButton).toBeEnabled();
});

describe('Spaces Before Camel-Case Capital Letters', () => {
  test('Works For No Inner Capital Letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works For One Inner Capital Letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works For Multiple Inner Capital Letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});