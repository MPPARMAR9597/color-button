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
