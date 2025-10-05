export default function ShoppingBasket({ className }: { className?: string }) {
  return (
    <img
      src="/basket.svg"
      alt="Shopping basket"
      className={className}
      width={24}
      height={24}
    />
  );
}
