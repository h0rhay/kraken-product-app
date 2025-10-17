import { GetStaticProps, GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { type Product, type ProductGraphQLResponse } from "../../types/Product";
import { GET_PRODUCT_BY_ID } from "../../queries/getProducts";
import { CartProvider } from "../../context/CartContext";
import ProductPageLayout from "../../layouts/ProductPageLayout";
import { GRAPHQL_ENDPOINT } from '../../lib/config';

interface ProductPageProps {
  product: Product;
}

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

export default function Product({ product }: { product: Product }) {
  return (
    <CartProvider>
      <ProductPageLayout product={product} />
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
    
    if (!result.data?.Product) {
      console.error(`Failed to fetch product ${params?.id}: No data returned`);
      return { notFound: true };
    }

    return {
      props: {
        product: result.data.Product,
      },
      revalidate: 30 * 60,
    };
  } catch (error) {
    console.error(`Failed to fetch product ${params?.id}:`, error);
    return { notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths<ProductPageParams> = async () => {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
};