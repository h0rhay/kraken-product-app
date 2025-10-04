import { GET_ALL_PRODUCTS } from "../queries/getProducts";
import { Product } from "../types/Product";
import ProductList from "../components/ProductList/ProductList";

export default function Home({ products }: { products: Product[] }) {
  return (
    <main>
      <div className="home">
        <figure>
          <img
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
          />
        </figure>
        <h1>Welcome to the Octopus Energy Frontend Product App</h1>
        <ProductList products={products} />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3001/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: GET_ALL_PRODUCTS }),
  });
  const { data } = await res.json();  
  return {
    props: { products: data.allProducts },
  };
};
