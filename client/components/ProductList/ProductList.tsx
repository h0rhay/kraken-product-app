import { Product, ProductListItem } from "../../types/Product";
import Link from "next/link";
import ProductTile from "../ProductTile";
import SampleProducts from "./SampleProducts";



const ProductList = ({ products }: { products: Product[] }) => {

  const allProducts: ProductListItem[] = [
    ...products, 
    ...SampleProducts
  ];
  
  return <ul className="product-list">
    {allProducts.map((product) => (
      <li key={product.id} className={product.disabled ? "disabled" : ""}>
        <Link href={`/product/${product.id}`}>
            {/* Next v12 <Link> only allows single child element, and passes the link ref to it */}
            <div>
                <ProductTile product={product} />
            </div>
        </Link>   
      </li>
    ))}
  </ul>;
};

export default ProductList;