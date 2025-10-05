import Image from 'next/image';
import { Product } from '../../../types/Product';

interface MainImageProps {
  product: Product;
}

export default function MainImage({ product }: MainImageProps) {
  return (
    <figure className="product-image">
      {product.img_url && (
        <Image
          src={product.img_url}
          alt={product.name}
          width={410}
          height={410}
          objectFit="contain"
        />
      )}
    </figure>
  );
}