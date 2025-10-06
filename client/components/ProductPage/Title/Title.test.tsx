import { render, screen } from '@testing-library/react';
import Title from './Title';
import { Product } from '../../../types/Product';

const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Test description',
  power: '10W',
  quantity: 5,
};

const mockProductMinimal: Product = {
  id: 2,
  name: 'Minimal Product',
  description: 'Minimal description',
};

describe('Title', () => {
  it('renders without crashing', () => {
    render(<Title product={mockProduct} />);
  });

  it('displays product name', () => {
    render(<Title product={mockProduct} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('displays power and quantity when provided', () => {
    render(<Title product={mockProduct} />);
    expect(screen.getByText('10W // Packet of 5')).toBeInTheDocument();
  });

  it('handles missing power and quantity gracefully', () => {
    render(<Title product={mockProductMinimal} />);
    expect(screen.getByText('Minimal Product')).toBeInTheDocument();
    // Should not crash and should not display specs section with content
    expect(screen.queryByText('10W')).not.toBeInTheDocument();
  });
});
