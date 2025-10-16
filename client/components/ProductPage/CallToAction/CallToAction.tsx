import { useCart } from '../../../context/CartContext';

export default function CallToAction() {
  const { addToCart } = useCart();

  return (
    <section className="call-to-action">
      <button className="add-to-cart" onClick={addToCart}>
        Add to cart
      </button>
    </section>
  );
}