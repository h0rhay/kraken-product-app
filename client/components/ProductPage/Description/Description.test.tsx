import { render, screen } from '@testing-library/react';
import Description from './Description';
import { Product } from '../../../types/Product';

const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  description: 'This is a detailed description of the test product with all its features and benefits.',
};

describe('Description', () => {
  it('renders without crashing', () => {
    render(<Description product={mockProduct} />);
  });

  it('displays the description heading', () => {
    render(<Description product={mockProduct} />);
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  it('displays the product description', () => {
    render(<Description product={mockProduct} />);
    expect(screen.getByText('This is a detailed description of the test product with all its features and benefits.')).toBeInTheDocument();
  });
});
