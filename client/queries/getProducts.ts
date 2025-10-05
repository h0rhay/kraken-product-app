export const GET_ALL_PRODUCTS = `
    query GetAllProducts {
        allProducts {
            id
            name
            description
            price
        }
    }
`;

export const GET_PRODUCT_BY_ID = `
    query GetProductById($productId: ID!) {
        Product(id: $productId) {
            id
            name
            description
            price
            brand
            quantity
            power
            weight
            height
            width
            length
            model_code
            colour
            img_url
        }
    }
`;
