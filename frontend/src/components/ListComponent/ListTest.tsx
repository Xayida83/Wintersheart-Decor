import { render, screen } from '@testing-library/react';
import ListComponent from './ListComponent';
import { describe, expect, it } from 'vitest';

describe('List Component', () => {
  it('renders a list of products', () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 10, imageUrl: 'image1.jpg' },
      { id: 2, name: 'Product 2', price: 20, imageUrl: 'image2.jpg' },
    ];

    render(<ListComponent products={mockProducts} />);

    // Kontrollera att produkterna visas
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
  });

  it('renders no products when the list is empty', () => {
    render(<ListComponent products={[]} />);

    // Kontrollera att inget visas
    expect(screen.queryByText('Product 1')).not.toBeInTheDocument();
  });
});
