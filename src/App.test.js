import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Button Has Correct Initial Color', () => {
  render(<App />);
  // Find an element with a role of button and text of 'Change To Blue'
  const colorButton = screen.getByRole('button', { name: /Change To Blue/i });

  // Expect the background color to be red
  expect(colorButton).toHaveStyle({ background: 'red' });

});

test('Button Has Correct Initial Text', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: /Change To Blue/i });

  // Click The Button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ background: 'blue' });

  // Expect The Button Text To Be 'Change To Red'
  expect(colorButton.textContent).toBe('Change To red');
});

test("Initial Conditions", () => {
  render(<App />);

  // Check That The Button Starts Out Enabled
  const colorButton = screen.getByRole('button', { name: /Change To Blue/i });

  expect(colorButton).toBeEnabled();

  // Check That The Checkbox Starts Out UnChecked
  const checkBox = screen.getByRole('checkbox');
  expect(checkBox).not.toBeChecked();
});

test("Checkbox disables Button On First Click And Enables On Second Click", () => {
  render(<App />);

  const checkBox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');

  fireEvent.click(checkBox);

  expect(button).toBeDisabled();

  fireEvent.click(checkBox);

  expect(button).toBeEnabled();
});