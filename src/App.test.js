import { render, screen } from '@testing-library/react';
import Equipes from './pages/Equipes';

test('renders learn react link', () => {
  render(<Equipes />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
