import { render, screen } from '@testing-library/react';
import CallToAction from './CallToAction';
import { CartProvider } from '../../../context/CartContext';

const CallToActionWithContext = () => (
  <CartProvider>
    <CallToAction />
  </CartProvider>
);

describe('CallToAction', () => {
  it('renders without crashing', () => {
    render(<CallToActionWithContext />);
  });

  it('displays the add to cart button', () => {
    render(<CallToActionWithContext />);
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  // Note: Cart functionality integration is covered by integration tests in /test/product.test.tsx
});
