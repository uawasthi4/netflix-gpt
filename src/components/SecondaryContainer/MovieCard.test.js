import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';

describe('MovieCard Component', () => {
  test('renders with poster and title', () => {
    render(<MovieCard posterPath="test.jpg" title="Test Movie" />);
    expect(screen.getByAltText(/Poster for Test Movie/i)).toBeInTheDocument();
  });

  test('returns null if posterPath is missing', () => {
    const { container } = render(<MovieCard title="No Poster" />);
    expect(container.firstChild).toBeNull();
  });
});
