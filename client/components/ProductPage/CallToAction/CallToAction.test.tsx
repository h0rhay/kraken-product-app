import { render, screen } from '@testing-library/react';
import CallToAction from './CallToAction';
import { CartProvider } from '../../../context/CartContext';

const CallToActionWithContext = ({ quantity }: { quantity: number }) => (
  <CartProvider>
    <CallToAction quantity={quantity} />
  </CartProvider>
);

describe('CallToAction', () => {
  it('renders without crashing', () => {
    render(<CallToActionWithContext quantity={1} />);
  });

  it('displays the add to cart button', () => {
    render(<CallToActionWithContext quantity={1} />);
    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
  });

  // Note: Cart functionality integration is covered by integration tests in /test/product.test.tsx
});
