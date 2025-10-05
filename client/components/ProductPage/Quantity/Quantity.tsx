import { Product } from '../../../types/Product';
import { formatCurrency } from '../../../lib/formatCurrency';

interface QuantityProps {
  product: Product;
}

export default function Quantity({ product }: QuantityProps) {
  return (
    <section className="price-qty">
      <h2 className="heading">{formatCurrency(product.price)}</h2>
      <div className="qty-wrapper">
        <p className="qty-label">Qty</p>
        <div className="qty-controls">
          <button className="qty-btn">-</button>
          <span>1</span>
          <button className="qty-btn plus">+</button>
        </div>
      </div>
    </section>
  );
}