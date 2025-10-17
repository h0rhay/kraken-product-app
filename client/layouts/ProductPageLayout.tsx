import { useLayout } from '../context/LayoutContext';
import { Product } from '../types/Product';
import LayoutToggle from '../components/LayoutToggle/LayoutToggle';
import Footer from '../components/ProductPage/Footer/Footer';
import Header from '../components/ProductPage/Header/Header';
import MainImage from '../components/ProductPage/MainImage/MainImage';
import Title from '../components/ProductPage/Title/Title';
import Quantity from '../components/ProductPage/Quantity/Quantity';
import CallToAction from '../components/ProductPage/CallToAction/CallToAction';
import Description from '../components/ProductPage/Description/Description';
import Specifications from '../components/ProductPage/Specifications/Specifications';

interface ProductPageLayoutProps {
  product: Product;
}

export default function ProductPageLayout({ product }: ProductPageLayoutProps) {
  const { isDesktopLayout } = useLayout();

  if (isDesktopLayout) {
    return (
      <div className="desktop-layout">
        <article className="product-page">
          <Header />
          <div className="product-content">
            <div className="product-main">
              <MainImage product={product} />
              <Title product={product} />
              <Quantity product={product} />
              <CallToAction />
            </div>
            <div className="product-sidebar">
              <Description product={product} />
              <Specifications product={product} />
            </div>
          </div>
          <Footer />
          <LayoutToggle />
        </article>
      </div>
    );
  }

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
      <LayoutToggle />
    </article>
  );
}
