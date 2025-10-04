import { type Product } from "../../types/Product";
import { GET_PRODUCT_BY_ID } from "../../queries/getProducts";
import ShoppingBasket from "../../components/ShoppingBasket";

export default function Product({ product }: { product: Product }) {

  return(
    <div className="product-page">
      <header className="product-header">
        <img className="product-logo" src="https://static.octopuscdn.com/logos/logo.svg" alt="Octopus Energy Logo" />
        <ShoppingBasket className="cart-icon" />
      </header>

      <figure className="product-image">
        {product.img_url && <img src={product.img_url} alt={product.name} />}
      </figure>

      <div className="product-title">
        <h1>{product.name}</h1>
        <p className="product-specs">{product.power} // {product.quantity}</p>
      </div>

      <div className="price-qty">
        <h1>£{product.price.toFixed(2)}</h1>
        <div className="qty-wrapper">
          <p className="qty-label">Qty</p>
          <div className="qty-controls">
            <button className="qty-btn">-</button>
            <span>1</span>
            <button className="qty-btn plus">+</button>
          </div>
        </div>
      </div>

      <button className="add-to-cart">Add to cart</button>

      <section>
        <h2>Description</h2>
        <p className="product-description">{product.description}</p>
      </section>

      <section>
        <h2>Specifications</h2>
        <div className="specs">
          <span className="spec-label">Brand</span>
          <span className="spec-value">{product.brand}</span>
          <span className="spec-label">Item weight (g)</span>
          <span className="spec-value">{product.weight}</span>
          <span className="spec-label">Dimensions (cm)</span>
          <span className="spec-value">{product.height} x {product.width} x {product.length}</span>
          <span className="spec-label">Item Model number</span>
          <span className="spec-value">{product.model_code}</span>
          <span className="spec-label">Colour</span>
          <span className="spec-value">{product.colour}</span>
        </div>
      </section>
    </div>
  )
}

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3001/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      query: GET_PRODUCT_BY_ID, 
      variables: { productId: params.id } 
    }),
  });
  const { data } = await res.json();
  return {
    props: { product: data.Product },
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1'}}],
    fallback: 'blocking'
  }
}

