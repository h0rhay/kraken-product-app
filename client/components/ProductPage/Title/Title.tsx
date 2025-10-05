import { Product } from '../../../types/Product';

interface TitleProps {
  product: Product;
}

export default function Title({ product }: TitleProps) {
  return (
    <div className="product-title">
      <h1 className="heading">{product.name}</h1>
      <p className="product-specs">
        {product.power}{` // Packet of `}{product.quantity}
      </p>
    </div>
  );
}