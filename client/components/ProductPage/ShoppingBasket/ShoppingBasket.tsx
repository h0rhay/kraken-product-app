import { useCart } from '../../../context/CartContext';

export default function ShoppingBasket({ className }: { className?: string }) {
  const { itemCount } = useCart();

  return (
    <div className={`shopping-basket ${className}`}>
      <img
        src="/basket.svg"
        alt="Shopping basket"
        width={30}
        height={30}
      />
      {itemCount > 0 && (
        <span className="cart-count-badge" title="Basket items">{itemCount}</span>
      )}
    </div>
    
  );
}
