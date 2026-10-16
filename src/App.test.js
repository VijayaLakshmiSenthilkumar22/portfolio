import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio with developer name and title', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Vijayalakshmi S/i);
  expect(nameElements.length).toBeGreaterThan(0);
  
  const titleElements = screen.getAllByText(/Full Stack Software Engineer/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
