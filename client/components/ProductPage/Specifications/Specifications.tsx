import { Product } from '../../../types/Product';

interface SpecificationsProps {
  product: Product;
}

export default function Specifications({ product }: SpecificationsProps) {
  return (
    <section className="product-specifications">
      <h2 className="heading sub-heading">Specifications</h2>
      <dl className="specs">
        {product.brand && (
          <>
            <dt>Brand</dt>
            <dd>{product.brand}</dd>
          </>
        )}
        {product.weight && (
          <>
            <dt>Item weight (g)</dt>
            <dd>{product.weight}</dd>
          </>
        )}
        {(product.height && product.width && product.length) && (
          <>
            <dt>Dimensions (cm)</dt>
            <dd>{product.height} x {product.width} x {product.length}</dd>
          </>
        )}
        {product.model_code && (
          <>
            <dt>Item model number</dt>
            <dd>{product.model_code}</dd>
          </>
        )}
        {product.colour && (
          <>
            <dt>Colour</dt>
            <dd>{product.colour}</dd>
          </>
        )}
      </dl>
    </section>
  );
}