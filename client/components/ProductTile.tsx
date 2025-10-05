import { Product } from "../types/Product";
const ProductTile = ({ product }: { product: Product }) => {
  return (
    <div>
      <h2 className="heading">{product.name}</h2>
      <p className="throttle-text">{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductTile;
