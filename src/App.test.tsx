import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

function toggleDarkMode() {
  const toggleButton = screen.getByRole('button', { name: /toggle dark mode/i });
  const previousMode = document.body.classList.contains('dark-mode');
  fireEvent.click(toggleButton);
  expect(toggleButton.getAttribute('aria-pressed')).toBe(!previousMode ? 'true' : 'false');
}

test('should toggle the dark mode when space bar is pressed', () => {
  render(<App />);
  fireEvent.keyDown(document, { code: 'Space' });
  toggleDarkMode();
});

test('should toggle the dark mode when the toggle button is clicked', () => {
  render(<App />);
  const toggleButton = screen.getByRole('button', { name: 'Toggle dark mode' });
  fireEvent.click(toggleButton);
  toggleDarkMode();
});



