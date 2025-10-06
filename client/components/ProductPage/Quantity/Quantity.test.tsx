import { render, screen, fireEvent } from '@testing-library/react';
import Quantity from './Quantity';
import { Product } from '../../../types/Product';

const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Test description',
  price: 2599, // £25.99
};

const mockOnQuantityChange = jest.fn();

describe('Quantity', () => {
  beforeEach(() => {
    mockOnQuantityChange.mockClear();
  });

  it('renders without crashing', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
  });

  it('displays formatted price', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    expect(screen.getByText('£25.99')).toBeInTheDocument();
  });

  it('displays quantity label and initial quantity of 1', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByTitle('Current quantity')).toHaveTextContent('1');
  });

  it('displays increment and decrement buttons', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
  });

  // Note: Basic increment/decrement functionality is covered by integration tests in /test/product.test.tsx

  it('disables decrement button when quantity is 1', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    
    const minusButton = screen.getByRole('button', { name: '-' });
    expect(minusButton).toBeDisabled();
  });

  it('enables decrement button when quantity is greater than 1', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    
    // Increment to 2
    const plusButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusButton);
    
    const minusButton = screen.getByRole('button', { name: '-' });
    expect(minusButton).not.toBeDisabled();
  });

  it('does not decrement below 1', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    
    const minusButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(minusButton); // Should not do anything
    
    expect(screen.getByTitle('Current quantity')).toHaveTextContent('1');
    expect(mockOnQuantityChange).not.toHaveBeenCalled();
  });

  it('calls onQuantityChange callback with correct values', () => {
    render(<Quantity product={mockProduct} onQuantityChange={mockOnQuantityChange} />);
    
    const plusButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusButton);
    
    expect(mockOnQuantityChange).toHaveBeenCalledWith(2);
    expect(mockOnQuantityChange).toHaveBeenCalledTimes(1);
  });
});
