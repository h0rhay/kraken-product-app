import { useCart } from '../../../context/CartContext';

interface CallToActionProps {
  quantity: number;
}

export default function CallToAction({ quantity }: CallToActionProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(quantity);
  };

  return (
    <section className="call-to-action">
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to cart
      </button>
    </section>
  );
}