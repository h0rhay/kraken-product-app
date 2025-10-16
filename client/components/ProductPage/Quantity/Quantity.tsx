import { Product } from '../../../types/Product';
import { formatCurrency } from '../../../lib/formatCurrency';
import { useCart } from '../../../context/CartContext';

interface QuantityProps {
  product: Product;
}

export default function Quantity({ product }: QuantityProps) {
  const { quantity, incrementQuantity, decrementQuantity } = useCart();

  return (
    <section className="price-qty">
      <h2 className="sub-heading price-heading">{formatCurrency(product.price)}</h2>
      <div className="qty-wrapper">
        <p className="qty-label">Qty</p>
        <div className="qty-controls">
          <button 
            className="qty-btn" 
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="sub-heading" title="Current quantity">{quantity}</span>
          <button className="qty-btn plus" onClick={incrementQuantity}>
            +
          </button>
        </div>
      </div>
    </section>
  );
}