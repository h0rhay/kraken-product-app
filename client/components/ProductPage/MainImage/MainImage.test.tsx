import { render, screen } from '@testing-library/react';
import MainImage from './MainImage';
import { Product } from '../../../types/Product';

const mockProductWithImage: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Test description',
  img_url: 'https://example.com/test-image.jpg',
};

const mockProductWithoutImage: Product = {
  id: 2,
  name: 'Product Without Image',
  description: 'Test description',
};

describe('MainImage', () => {
  it('renders without crashing', () => {
    render(<MainImage product={mockProductWithImage} />);
  });

  it('displays image when img_url is provided', () => {
    render(<MainImage product={mockProductWithImage} />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Test Product');
    // Note: Next.js Image component uses placeholder src, actual URL is handled internally
  });

  it('handles missing img_url gracefully', () => {
    render(<MainImage product={mockProductWithoutImage} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders figure container regardless of image presence', () => {
    const { container } = render(<MainImage product={mockProductWithoutImage} />);
    const figure = container.querySelector('figure.product-image');
    expect(figure).toBeInTheDocument();
  });
});
