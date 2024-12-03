import { render, screen } from '@testing-library/react';
import { ListComponent } from './ListComponent';
import { describe, it, expect } from 'vitest';

describe('ListComponent', () => {
  it('renders a list of items', () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 10, imageUrl: 'image1.jpg' },
      { id: 2, name: 'Product 2', price: 20, imageUrl: 'image2.jpg' },
    ];

    render(<ListComponent products={mockProducts} />);

    // Kontrollera att produkterna visas korrekt
    expect(screen.getByTestId('item-1')).toBeInTheDocument();
    expect(screen.getByTestId('item-2')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
  });

  it('renders no items when product list is empty', () => {
    render(<ListComponent products={[]} />);

    // Kontrollera att inga produkter visas
    expect(screen.queryByTestId('item-1')).not.toBeInTheDocument();
    expect(screen.queryByTestId('item-2')).not.toBeInTheDocument();
  });
});
