import { Product } from "../types/Product";
import { formatCurrency } from "../lib/formatCurrency";

const ProductTile = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2 className="heading">{product.name}</h2>
      <p className="throttle-text">{product.description}</p>
      <p>{formatCurrency(product.price)}</p>
    </div>
  );
};

export default ProductTile;
