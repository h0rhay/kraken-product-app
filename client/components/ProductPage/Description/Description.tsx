import { Product } from '../../../types/Product';

interface DescriptionProps {
  product: Product;
}

export default function Description({ product }: DescriptionProps) {
  return (
    <section className="alt-background product-description">
      <h2 className="heading sub-heading">Description</h2>
      <p>{product.description}</p>
    </section>
  );
}