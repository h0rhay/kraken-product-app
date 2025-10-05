import { Product } from '../../../types/Product';

interface SpecificationsProps {
  product: Product;
}

export default function Specifications({ product }: SpecificationsProps) {
  return (
    <section className="product-specifications">
      <h2 className="heading">Specifications</h2>
      <dl className="specs">
        <dt>Brand</dt>
        <dd>{product.brand}</dd>
        <dt>Item weight (g)</dt>
        <dd>{product.weight}</dd>
        <dt>Dimensions (cm)</dt>
        <dd>
          {product.height} x {product.width} x {product.length}
        </dd>
        <dt>Item model number</dt>
        <dd>{product.model_code}</dd>
        <dt>Colour</dt>
        <dd>{product.colour}</dd>
      </dl>
    </section>
  );
}