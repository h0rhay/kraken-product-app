import { render, fireEvent } from "@testing-library/react";
import Product from "../pages/product/[id]";
import { Product as ProductType } from "../types/Product";

const mockProduct: ProductType = {
  id: 1,
  name: "Test Product",
  description: "A test product for testing purposes",
  price: 2500,
  brand: "Test Brand",
  weight: 100,
  height: 10,
  width: 20,
  length: 30,
  model_code: "TEST123",
  colour: "Blue",
  img_url: "https://example.com/test-image.jpg"
};

test("should be able to increase and decrease product quantity", async () => {
  const { getByText, getByTitle } = render(<Product product={mockProduct} />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");
  expect(currentQuantity).toHaveTextContent("1");

  fireEvent.click(increaseQuantity);
  expect(currentQuantity).toHaveTextContent("2");

  const decreaseQuantity = getByText("-");

  fireEvent.click(decreaseQuantity);
  expect(currentQuantity).toHaveTextContent("1");
});

test("should be able to add items to the basket", async () => {
  const { getByText, getByTitle } = render(<Product product={mockProduct} />);

  const increaseQuantity = getByText("+");

  const currentQuantity = getByTitle("Current quantity");

  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);
  fireEvent.click(increaseQuantity);

  expect(currentQuantity).toHaveTextContent("4");

  const addToBasketElement = getByText("Add to cart");
  fireEvent.click(addToBasketElement);

  const basketItems = getByTitle("Basket items");
  expect(basketItems).toHaveTextContent("4");
});
