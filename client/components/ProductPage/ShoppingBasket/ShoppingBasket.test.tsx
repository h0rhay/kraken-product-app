import { render, screen } from '@testing-library/react';
import ShoppingBasket from './ShoppingBasket';
import { CartProvider } from '../../../context/CartContext';

describe('ShoppingBasket', () => {
  it('renders without crashing', () => {
    render(
      <CartProvider>
        <ShoppingBasket />
      </CartProvider>
    );
  });

  it('displays the basket icon', () => {
    render(
      <CartProvider>
        <ShoppingBasket />
      </CartProvider>
    );
    expect(screen.getByRole('img', { name: /shopping basket/i })).toBeInTheDocument();
  });

  it('does not show badge when item count is 0', () => {
    render(
      <CartProvider>
        <ShoppingBasket />
      </CartProvider>
    );
    expect(screen.queryByTitle('Basket items')).not.toBeInTheDocument();
  });

});
