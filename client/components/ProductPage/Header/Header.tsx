import Image from 'next/image';
import ShoppingBasket from '../ShoppingBasket/ShoppingBasket';

export default function Header() {
  return (
    <header className="product-header">
      <Image
        className="product-logo"
        src="https://static.octopuscdn.com/logos/logo.svg"
        alt="Octopus Energy Logo"
        width={200}
        height={50}
      />
      <ShoppingBasket className="cart-icon" />
    </header>
  );
}