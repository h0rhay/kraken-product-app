import { type Product } from "../../types/Product";
import { GET_PRODUCT_BY_ID } from "../../queries/getProducts";
import Footer from "../../components/Footer";
import Header from "../../components/ProductPage/Header/Header";
import MainImage from "../../components/ProductPage/MainImage/MainImage";
import Title from "../../components/ProductPage/Title/Title";
import Quantity from "../../components/ProductPage/Quantity/Quantity";
import CallToAction from "../../components/ProductPage/CallToAction/CallToAction";
import Description from "../../components/ProductPage/Description/Description";
import Specifications from "../../components/ProductPage/Specifications/Specifications";

export default function Product({ product }: { product: Product }) {
  return (
    <article className="product-page">
      <Header />
      <MainImage product={product} />
      <Title product={product} />
      <Quantity product={product} />
      <CallToAction />
      <Description product={product} />
      <Specifications product={product} />
      <Footer />
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