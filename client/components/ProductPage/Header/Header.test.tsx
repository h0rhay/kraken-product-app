import { render, screen } from '@testing-library/react';
import Header from './Header';
import { CartProvider } from '../../../context/CartContext';

const HeaderWithContext = () => (
  <CartProvider>
    <Header />
  </CartProvider>
);

describe('Header', () => {
  it('renders without crashing', () => {
    render(<HeaderWithContext />);
  });

  it('displays the Octopus Energy logo', () => {
    render(<HeaderWithContext />);
    const logo = screen.getByRole('img', { name: /octopus energy logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'Octopus Energy Logo');
  });

  it('includes the shopping basket component', () => {
    render(<HeaderWithContext />);
    const basketIcon = screen.getByRole('img', { name: /shopping basket/i });
    expect(basketIcon).toBeInTheDocument();
  });

});
