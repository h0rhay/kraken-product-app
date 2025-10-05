import { Product } from '../../../types/Product';

interface QuantityProps {
  product: Product;
}

export default function Quantity({ product }: QuantityProps) {
  return (
    <section className="price-qty">
      <h2 className="heading">£{product.price.toFixed(2)}</h2>
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