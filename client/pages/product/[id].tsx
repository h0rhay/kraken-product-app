import { type Product } from "../../types/Product";
import { GET_PRODUCT_BY_ID } from "../../queries/getProducts";


export default function Product({ product }: { product: Product }) {

  return <div className="product-page">
    <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
    {product.img_url && <img src={product.img_url} alt={product.name} />}

    <div>
      <h1>{product.name}</h1>
      <p>{product.power} / {product.quantity}</p>
    </div>
    <div>
      <p>{product.price}</p>
      <button>+</button>
      <button>Quantity</button>
      <button>-</button>
    </div>
    <div>
    <button>Add to cart</button>
    </div>
    <div>

    <h2>Description</h2>
    <p>{product.description}</p>
    </div>
    <div>  
    <h2>Specifications</h2>
    <p>Brand: {product.brand}</p>
    <p>Weight: {product.weight} kg</p>
    <p>Dimensions: {product.height} x {product.width} x {product.length} cm</p>
    <p>Model code: {product.model_code}</p>
    <p>Colour: {product.colour}</p>
    </div>

  </div>;
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

