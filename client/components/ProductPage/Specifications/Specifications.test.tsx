import { render, screen } from '@testing-library/react';
import Specifications from './Specifications';
import { Product } from '../../../types/Product';

const mockProductFull: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Test description',
  brand: 'Test Brand',
  weight: 500,
  height: 10,
  width: 15,
  length: 20,
  model_code: 'TEST123',
  colour: 'Blue',
};

const mockProductMinimal: Product = {
  id: 2,
  name: 'Minimal Product',
  description: 'Minimal description',
};

const mockProductPartialDimensions: Product = {
  id: 3,
  name: 'Partial Product',
  description: 'Partial description',
  height: 10,
  width: 15,
  // Missing length - dimensions should not display
};

describe('Specifications', () => {
  it('renders without crashing', () => {
    render(<Specifications product={mockProductFull} />);
  });

  it('displays the specifications heading', () => {
    render(<Specifications product={mockProductFull} />);
    expect(screen.getByText('Specifications')).toBeInTheDocument();
  });

  it('displays all specifications when provided', () => {
    render(<Specifications product={mockProductFull} />);
    
    expect(screen.getByText('Brand')).toBeInTheDocument();
    expect(screen.getByText('Test Brand')).toBeInTheDocument();
    
    expect(screen.getByText('Item weight (g)')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    
    expect(screen.getByText('Dimensions (cm)')).toBeInTheDocument();
    expect(screen.getByText('10 x 15 x 20')).toBeInTheDocument();
    
    expect(screen.getByText('Item model number')).toBeInTheDocument();
    expect(screen.getByText('TEST123')).toBeInTheDocument();
    
    expect(screen.getByText('Colour')).toBeInTheDocument();
    expect(screen.getByText('Blue')).toBeInTheDocument();
  });

  it('handles missing specifications gracefully', () => {
    render(<Specifications product={mockProductMinimal} />);
    
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.queryByText('Brand')).not.toBeInTheDocument();
    expect(screen.queryByText('Item weight (g)')).not.toBeInTheDocument();
    expect(screen.queryByText('Dimensions (cm)')).not.toBeInTheDocument();
    expect(screen.queryByText('Item model number')).not.toBeInTheDocument();
    expect(screen.queryByText('Colour')).not.toBeInTheDocument();
  });

  it('only displays dimensions when all three values are present', () => {
    render(<Specifications product={mockProductPartialDimensions} />);
    
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.queryByText('Dimensions (cm)')).not.toBeInTheDocument();
  });
});
