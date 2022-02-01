import { render, screen } from '@testing-library/react';
import App from './App';

test('arrakeen', () => {
  render(<App />);
  const linkElement = screen.getByText(/arrakeen/i);
  expect(linkElement).toBeInTheDocument();
});
