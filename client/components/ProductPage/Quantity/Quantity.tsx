import { useState } from 'react';
import { Product } from '../../../types/Product';
import { formatCurrency } from '../../../lib/formatCurrency';

interface QuantityProps {
  product: Product;
  onQuantityChange: (quantity: number) => void;
}

export default function Quantity({ product, onQuantityChange }: QuantityProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <section className="price-qty">
      <h2 className="heading price-heading">{formatCurrency(product.price)}</h2>
      <div className="qty-wrapper">
        <p className="qty-label">Qty</p>
        <div className="qty-controls">
          <button 
            className="qty-btn" 
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span title="Current quantity">{quantity}</span>
          <button className="qty-btn plus" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </section>
  );
}