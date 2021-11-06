import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Learn More link', () => {
  render(<App />);
  const linkElement = screen.getByText('Learn More');
  expect(linkElement).toBeInTheDocument();
});
