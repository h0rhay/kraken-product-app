import { Product } from '../../../types/Product';

interface TitleProps {
  product: Product;
}

export default function Title({ product }: TitleProps) {
  return (
    <section className="product-title">
      <h1 className="heading main-title">{product.name}</h1>
      <p className="product-specs">
        {product.power && `${product.power} // `}
        {product.quantity && `Packet of ${product.quantity}`}
      </p>
    </section>
  );
}