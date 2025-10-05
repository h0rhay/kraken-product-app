import { useState } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { type Product, type ProductGraphQLResponse } from "../../types/Product";
import { GET_PRODUCT_BY_ID } from "../../queries/getProducts";
import { CartProvider } from "../../context/CartContext";
import Footer from "../../components/ProductPage/Footer/Footer";
import Header from "../../components/ProductPage/Header/Header";
import MainImage from "../../components/ProductPage/MainImage/MainImage";
import Title from "../../components/ProductPage/Title/Title";
import Quantity from "../../components/ProductPage/Quantity/Quantity";
import CallToAction from "../../components/ProductPage/CallToAction/CallToAction";
import Description from "../../components/ProductPage/Description/Description";
import Specifications from "../../components/ProductPage/Specifications/Specifications";
import { GRAPHQL_ENDPOINT } from '../../lib/config';
interface ProductPageProps {
  product: Product;
}

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

function ProductContent({ product }: { product: Product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  return (
    <article className="product-page">
      <Header />
      <MainImage product={product} />
      <Title product={product} />
      <Quantity 
        product={product} 
        onQuantityChange={setSelectedQuantity}
      />
      <CallToAction quantity={selectedQuantity} />
      <Description product={product} />
      <Specifications product={product} />
      <Footer />
    </article>
  );
}

export default function Product({ product }: { product: Product }) {
  return (
    <CartProvider>
      <ProductContent product={product} />
    </CartProvider>
  );
}

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({
  params,
}) => {
  try {
    const res = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_PRODUCT_BY_ID,
        variables: { productId: params?.id },
      }),
    });
    
    const result: ProductGraphQLResponse = await res.json();
    
    if (result.errors) {
      console.error('GraphQL errors:', result.errors);
      return { notFound: true };
    }

    if (!result.data?.Product) {
      return { notFound: true };
    }

    return {
      props: {
        product: result.data.Product,
      },
      revalidate: 30 * 60,
    };
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};