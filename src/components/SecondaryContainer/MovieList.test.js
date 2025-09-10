import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

describe('MovieList Component', () => {
  test('renders title', () => {
    render(<MovieList title="Popular" movies={[]} />);
    expect(screen.getByText(/Popular/i)).toBeInTheDocument();
  });

  test('shows loading when movies is undefined', () => {
    render(<MovieList title="Popular" movies={undefined} />);
    expect(screen.getByText(/Loading movies.../i)).toBeInTheDocument();
  });
});
