import Image from "next/image";
import { GET_ALL_PRODUCTS } from "../queries/getProducts";
import { Product } from "../types/Product";
import ProductList from "../components/ProductList/ProductList";
import { GRAPHQL_ENDPOINT } from '../lib/config';

export default function Home({ products }: { products: Product[] }) {
  return (
    <main>
      <div className="home">
        <figure>
          <Image
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
            width={200}
            height={50}
          />
        </figure>
        <h1 className="heading">Welcome to the Octopus Energy / Kraken Frontend Product App</h1>
        <p className="lead">Please click on an active product to view its detailed product tile.</p>
        <p className="lead">I have structured the app this way to demonstrate dynamic routing within this mini Next.js project.</p>
        <p className="lead space-below">This setup closely mirrors how a GraphQL API might handle requests using a <code>Product(ID)</code> pattern.</p>
        <ProductList products={products} />
      </div>
    </main>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(GRAPHQL_ENDPOINT, {
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
