import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Quantity from './Quantity';
import { Product } from '../../../types/Product';
import { CartProvider } from '../../../context/CartContext';

const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Test description',
  price: 2599, // £25.99
};

// Helper function to render component with CartProvider
const renderWithCartProvider = (component: React.ReactElement) => {
  return render(<CartProvider>{component}</CartProvider>);
};

describe('Quantity', () => {

  it('renders without crashing', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
  });

  it('displays formatted price', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    expect(screen.getByText('£25.99')).toBeInTheDocument();
  });

  it('displays quantity label and initial quantity of 1', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    expect(screen.getByText('Qty')).toBeInTheDocument();
    expect(screen.getByTitle('Current quantity')).toHaveTextContent('1');
  });

  it('displays increment and decrement buttons', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    expect(screen.getByRole('button', { name: '+' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '-' })).toBeInTheDocument();
  });

  // Note: Basic increment/decrement functionality is covered by integration tests in /test/product.test.tsx

  it('disables decrement button when quantity is 1', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    
    const minusButton = screen.getByRole('button', { name: '-' });
    expect(minusButton).toBeDisabled();
  });

  it('enables decrement button when quantity is greater than 1', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    
    // Increment to 2
    const plusButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusButton);
    
    const minusButton = screen.getByRole('button', { name: '-' });
    expect(minusButton).not.toBeDisabled();
  });

  it('does not decrement below 1', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    
    const minusButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(minusButton); // Should not do anything
    
    expect(screen.getByTitle('Current quantity')).toHaveTextContent('1');
  });

  it('increments quantity when plus button is clicked', () => {
    renderWithCartProvider(<Quantity product={mockProduct} />);
    
    const plusButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(plusButton);
    
    expect(screen.getByTitle('Current quantity')).toHaveTextContent('2');
  });
});
