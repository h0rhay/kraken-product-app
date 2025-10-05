import { type Product } from "../../types/Product";
import { GET_PRODUCT_BY_ID } from "../../queries/getProducts";
import Image from "next/image";
import ShoppingBasket from "../../components/ShoppingBasket";

export default function Product({ product }: { product: Product }) {
  return (
    <article className="product-page">
      <header className="product-header">
        <Image
          className="product-logo"
          src="https://static.octopuscdn.com/logos/logo.svg"
          alt="Octopus Energy Logo"
          width={200}
          height={50}
        />
        <ShoppingBasket className="cart-icon" />
      </header>

      <figure className="product-image">
        {product.img_url && (
          <Image src={product.img_url} alt={product.name} width={200} height={200} />
        )}
      </figure>

      <div className="product-title">
        <h1>{product.name}</h1>
        <p className="product-specs">
          {product.power} // {product.quantity}
        </p>
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

      <section className="product-specs">
        <h2>Specifications</h2>
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
    </article>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`http://localhost:3001/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_PRODUCT_BY_ID,
      variables: { productId: params.id },
    }),
  });
  const { data } = await res.json();
  return {
    props: { product: data.Product },
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
}
